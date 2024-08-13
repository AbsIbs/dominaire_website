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
  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
  return urlRegex.test(website);
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
  return categories.every((category) => categoriesArray.includes(category));
};

const validateData = (data) => {
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

  // Validate Categories
  if (!validateCategories(data.categories)) {
    return {
      error: "categories",
      message: "Invalid categories",
    };
  }

  // Validate Website
  if (!validateWebsite(data.website)) {
    return { error: "website", message: "Invalid website" };
  }

  // All validations passed
  return { error: false };
};

const sendEmail = async () => {
  const resend = new Resend(process.env.RESEND_API);
  resend.emails
    .send({
      from: "onboarding@resend.dev",
      to: "abass.ibrahim@dominaire.com",
      subject: "Interest in services",
      react: <EmailTemplate {...data} />,
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};

export const EmailHandler = async (data) => {
  const validationResult = validateData(data);

  // Validate data
  if (validationResult.error !== false) {
    return validationResult;
  } else {
    sendEmail();
  }
};
