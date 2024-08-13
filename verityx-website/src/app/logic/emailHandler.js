"use server";
import { Resend } from "resend";
// Components
import EmailTemplate from "../contact-us/components/emailTemplate";

const validateName = (name) => {
  // The name must be between 2 and 50 characters and cannot contain numbers
  const nameRegex = /^[a-zA-Z\s-]{2,50}$/;
  return nameRegex.test(name);
};

const vaildateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateOrganisation = (organisation) => {
  // The name must be between 2 and 100 characters and cannot contain numbers
  const nameRegex = /^[a-zA-Z\s-]{2,100}$/;
  return nameRegex.test(organisation);
};

const validateWebsite = (website) => {
  // Website is optional. So if it's empty, it's valid
  if (website.length > 0) {
    const urlRegex =
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
    return urlRegex.test(website);
  } else {
    return true;
  }
};

const validateMessage = (message) => {
  // The message must be between 1 and 1000 characters of any kind
  const messageRegex = /^.{1,1000}$/;
  return messageRegex.test(message);
};

const validateCategories = (categories) => {
  const categoriesArray = [
    "Web design",
    "Web development",
    "Branding",
    "Online marketing",
    "SEO",
    "A.I. & Automation",
  ];
  if (categories.length === 0) {
    return false;
  }
  return categories.every((category) => categoriesArray.includes(category));
};

const validateData = (data) => {
  // Validate Categories
  if (!validateCategories(data.categories)) {
    return {
      error: "categories",
      message: "Invalid categories",
    };
  }

  // Validate Name
  if (!validateName(data.name)) {
    return { error: "name", message: "Invalid name" };
  }

  // Validate Email
  if (!vaildateEmail(data.email)) {
    return { error: "email", message: "Invalid email" };
  }

  // Validate Organisation
  if (!validateOrganisation(data.organisation)) {
    return {
      error: "organisation",
      message: "Invalid organisation",
    };
  }

  // Validate Website
  if (!validateWebsite(data.website)) {
    return { error: "website", message: "Invalid website" };
  }

  // Validate Message
  if (!validateMessage(data.message)) {
    return { error: "message", message: "Invalid message" };
  }

  // All validations passed
  return { error: false };
};

const sendEmail = async (data) => {
  const resend = new Resend(process.env.RESEND_API);
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "abass.ibrahim@dominaire.com",
      subject: "Interest in services",
      react: <EmailTemplate {...data} />,
    });

    console.log("SUCCESS!", response);
    return { error: false }; // Return success
  } catch (error) {
    console.log("FAILED...", error);
    return { error: true }; // Return error
  }
};

export const EmailHandler = async (data) => {
  const validationResult = validateData(data);

  // Validate data
  if (validationResult.error) {
    console.log("Problem");
    return validationResult;
  } else {
    const res = await sendEmail(data); // Await the sendEmail function
    console.log("Success", res);
    return res; // This will correctly return { error: false } or { error: true }
  }
};
