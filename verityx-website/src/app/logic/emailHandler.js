"use server";
import { Resend } from "resend";

export const EmailHandler = async (data) => {
  const resend = new Resend(process.env.RESEND_API);
  resend.emails
    .send({
      from: "onboarding@resend.dev",
      to: "abass.ibrahim@dominaire.com",
      subject: "Interest in services",
      text: "Hello world",
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
