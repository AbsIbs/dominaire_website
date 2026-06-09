"use client";
// React
import { useState } from "react";

// Icons
import { IoSend } from "react-icons/io5";

// Components
import { AlertModal } from "@/src/components/ui/feedback";

// Logic
/* import { EmailHandler } from "../logic/emailHandler"; */

// Types
type InputField = {
  number: string;
  label: string;
  error: boolean;
  errorLabel: string;
  children: React.ReactNode;
  length: number;
  maxLength: number;
};

// UI
const InputField = ({
  number,
  label,
  error,
  errorLabel,
  children,
  length,
  maxLength,
}: InputField) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6">
        <div className="h-full">
          <p
            className={`res-text-21 ${
              error ? "text-red-900" : "text-textMuted"
            } font-medium`}
          >
            {number}
          </p>
        </div>
        <div className="flex-1 flex-col flex gap-4">
          <label className={`res-text-30 ${error && "text-red-900"}`}>
            {label}
          </label>
          {children}
        </div>
      </div>
      <div className="flex justify-between w-full res-text-21">
        <p className={` text-red-700 ${error ? "block" : "invisible"}`}>
          {errorLabel}
        </p>
        <p className="res-text-21 text-text-normal-70">
          {length}/{maxLength}
        </p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  // States
  const [categoriesData, setCategoriesData] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    organisation: "",
    website: "",
    message: "",
  });

  const [categoriesError, setCategoriesError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [organisationError, setOrganisationError] = useState(false);
  const [websiteError, setWebsiteError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [successModal, setSuccessModal] = useState(true);

  // Variables
  const categories = [
    "Web design",
    "Web development",
    "Branding",
    "Online marketing",
    "SEO",
    "A.I. & Automation",
  ];

  const maxLength = 1000;

  // Handlers
  const categoryHandler = (name: string) => {
    setCategoriesData((prev) => {
      // Check if the category is already in the array
      if (prev.includes(name)) {
        // Remove the category if it is already present
        return prev.filter((category) => category !== name);
      } else {
        // Add the category if it is not present
        return [...prev, name];
      }
    });
  };

  return (
    <>
      <form className="flex flex-col gap-24">
        <div className="flex flex-col gap-4">
          <label>
            <p
              className={`${
                categoriesError ? "text-red-900" : "text-textMuted"
              } res-text-38 font-light`}
            >
              I&apos;m interested in...
            </p>
          </label>
          <div className="flex gap-5 flex-wrap">
            {categories.map((item, index) => {
              const isSelected = categoriesData.includes(item);

              return (
                <button
                  value={categories[index]}
                  key={index}
                  type="button"
                  onClick={(e) => categoryHandler(e.currentTarget.value)}
                >
                  <div
                    className={`duration-300 transition-all border rounded-full py-3 px-8 ${isSelected ? "border-transparent bg-text text-background" : "border-border text-text"}`}
                  >
                    <p className={`res-text-30`}>{item}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <InputField
          error={nameError}
          errorLabel="Please enter a valid name."
          length={formObject.name.length}
          maxLength={100}
          number="01"
          label="What is your name?"
        >
          <input
            className={`transition-all bg-transparent w-full res-text-38 focus:border-b-white ${
              nameError
                ? "text-red-900 border-b-red focus:border-b-red-900"
                : "text-text-normal border-b-line focus:border-b-black"
            } bottom-4 pb-4 border-b-2 focus:outline-none`}
            type={"text"}
            placeholder={"John Doe"}
          />
        </InputField>

        <InputField
          error={emailError}
          errorLabel="Please enter a valid email."
          length={formObject.email.length}
          maxLength={100}
          number="02"
          label="What is your email?"
        >
          <input
            className={`transition-all bg-transparent w-full res-text-38 focus:border-b-white ${
              emailError
                ? "text-red-900 border-b-red focus:border-b-red-900"
                : "text-text-normal border-b-line focus:border-b-black"
            } bottom-4 pb-4 border-b-2 focus:outline-none`}
            type="email"
            placeholder="johndoe@gmail.com"
          />
        </InputField>

        <InputField
          error={organisationError}
          errorLabel="Please enter a valid organisation name."
          length={formObject.organisation.length}
          maxLength={100}
          number="03"
          label="What is your organisation?"
        >
          <input
            className={`transition-all bg-transparent w-full res-text-38 focus:border-b-white ${
              organisationError
                ? "text-red-900 border-b-red focus:border-b-red-900"
                : "text-text-normal border-b-line focus:border-b-black"
            } bottom-4 pb-4 border-b-2 focus:outline-none`}
            type="text"
            placeholder="John & Doe Ltd"
          />
        </InputField>

        <InputField
          error={websiteError}
          errorLabel="Please enter a valid website url."
          length={formObject.website.length}
          maxLength={100}
          number="04"
          label="What is your website url? (optional)"
        >
          <input
            className={`transition-all bg-transparent w-full res-text-38 focus:border-b-white ${
              websiteError
                ? "text-red-900 border-b-red focus:border-b-red-900"
                : "text-text-normal border-b-line focus:border-b-black"
            } bottom-4 pb-4 border-b-2 focus:outline-none`}
            type="url"
            placeholder="www.johndoe.com"
          />
        </InputField>

        <InputField
          error={messageError}
          errorLabel="Please enter a valid message."
          length={formObject.message.length}
          maxLength={1000}
          number="05"
          label="Message"
        >
          <textarea
            rows={5}
            className={`transition-all bg-transparent w-full res-text-38 focus:border-b-white ${
              messageError
                ? "text-red-900 border-b-red focus:border-b-red-900"
                : "text-text-normal border-b-line focus:border-b-black"
            } bottom-4 pb-4 border-b-2 focus:outline-none`}
            placeholder="Hi, I'd like help with..."
          />
        </InputField>

        <button className="bg-primary flex justify-center items-center gap-4 rounded-full py-4 px-4 w-full">
          <p className="text-white res-text-30">SEND</p>
          <IoSend className="text-white res-text-30" />
        </button>
      </form>
    </>
  );
};

export default ContactForm;
