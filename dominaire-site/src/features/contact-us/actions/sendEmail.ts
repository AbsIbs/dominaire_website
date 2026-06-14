"use server";
// Supabase
import { Resend } from "resend";

// Components
import { z } from "zod";

// Types
type SubmitContactFormState = {
  success: boolean;
  error: string;
  errors: {
    categories?: string;
    name?: string;
    email?: string;
    organisation?: string;
    websiteUrl?: string;
    message?: string;
  };
};

// Schemas
const categories = [
  "Web design",
  "Web development",
  "Branding",
  "Online marketing",
  "SEO",
  "A.I. & Automation",
] as const;

const contactFormSchema = z.object({
  categories: z
    .array(z.enum([...categories]))
    .min(1, "Select at least one category"),

  name: z
    .string()
    .min(2, "Please enter at least 2 characters for your name")
    .max(50, "Your name seems too long — keep it under 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Your name can only include letters, spaces, apostrophes, and hyphens",
    ),

  email: z
    .email("Hmm, that doesn’t look like a valid email address")
    .max(100, "Email seems too long — under 100 characters works best"),

  organisation: z
    .string()
    .max(
      100,
      "Whoa, that’s a lot! Keep your organisation name under 1000 characters",
    ),

  websiteUrl: z
    .url()
    .max(100, "Whoa, that’s a lot! Keep your url under 1000 characters")
    .or(z.literal("")),

  message: z
    .string()
    .min(10, "Could you write a bit more? At least 10 characters please")
    .max(1000, "Whoa, that’s a lot! Keep your message under 1000 characters"),
});

export const sendEmail = async (
  prevState: SubmitContactFormState,
  formData: FormData,
) => {
  // Always start with a clean state
  const nextState: SubmitContactFormState = {
    ...prevState,
    error: "",
    errors: {},
    success: false,
  };

  if (!formData) {
    return { ...nextState, error: "Invalid form data." };
  }

  const rawCategories = formData.get("categories") as string;
  const parsedCategories = JSON.parse(rawCategories);

  const form = {
    categories: parsedCategories,
    name: formData.get("name"),
    email: formData.get("email"),
    organisation: formData.get("organisation"),
    websiteUrl: formData.get("websiteUrl"),
    message: formData.get("message"),
  };

  // Validate input with Zod
  const { error, data } = contactFormSchema.safeParse(form);

  if (error) {
    const flattened = z.flattenError(error);
    const fieldErrors = flattened.fieldErrors;

    const firstErrors: { [key: string]: string } = {};

    for (const [key, value] of Object.entries(fieldErrors)) {
      firstErrors[key] = value[0];
    }

    return {
      ...nextState,
      error: "Please check your inputs.",
      errors: firstErrors,
    };
  }

  const { name, email, message, categories, organisation, websiteUrl } = data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
  <div>
    <p style="font-weight: 500;">Name: ${name}</p>
    <p style="font-weight: 500;">Email: ${email}</p>
    <p style="font-weight: 500;">Organisation: ${organisation}</p>
    <p style="font-weight: 500;">Website: ${websiteUrl}</p>
    <p style="font-weight: 500;">Categories: ${categories.join(", ")}</p>
    <p style="font-weight: 500;">Message: ${message}</p>
  </div>
`;

  try {
    const response = await resend.emails.send({
      from: "support@dominaire.com",
      to: "abass.ibrahim@dominaire.com",
      subject: "Interest in subServices",
      html: html,
    });

    if (response.error) {
      console.log(response.error, "email error");

      return {
        ...nextState,
        error: "Error sending email.",
      };
    }

    return {
      ...nextState,
      success: true,
    };
  } catch (error) {
    console.log("FAILED...", error);

    return { ...nextState, error: "Error sending email." };
  }
};
