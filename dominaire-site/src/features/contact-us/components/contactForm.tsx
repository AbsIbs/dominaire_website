"use client";
// React
import { useState, useActionState, useEffect } from "react";

// UI
import { Spinner } from "@/src/components/ui/feedback";

// Actions
import { sendEmail } from "@/src/features/contact-us/actions";

// Icons
import { IoSend } from "react-icons/io5";

// Components
import { AlertModal } from "@/src/components/ui/feedback";

// Types
type InputField = {
  number: string;
  label: string;
  error: string | undefined;
  errorLabel: string | undefined;
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
          <div className="flex justify-between w-full res-text-21">
            <p className={` text-red-700 ${error ? "block" : "invisible"}`}>
              {errorLabel}
            </p>
            <p className="res-text-21 text-text-normal-70">
              {length}/{maxLength}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  // States
  const [categories, setCategories] = useState<string[]>([]);
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    organisation: "",
    websiteUrl: "",
    message: "",
  });
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  // Action States
  const [state, formAction, isPending] = useActionState(sendEmail, {
    success: false,
    error: "",
    errors: {
      name: undefined,
      email: undefined,
      message: undefined,
      categories: undefined,
      organisation: undefined,
      websiteUrl: undefined,
    },
  });

  const {
    name: nameError,
    email: emailError,
    organisation: organisationError,
    websiteUrl: websiteError,
    message: messageError,
    categories: categoriesError,
  } = state.errors;

  // Variables
  const categoriesArray = [
    "Web design",
    "Web development",
    "Branding",
    "Online marketing",
    "SEO",
    "A.I. & Automation",
  ];

  // Handlers
  const categoryHandler = (name: string) => {
    setCategories((prev) => {
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

  const handleInputChange = (key: string, value: string) => {
    setFormObject((prev) => {
      return { ...prev, [key]: value };
    });
  };

  useEffect(() => {
    if (state.error) {
      setErrorModal(true);
    }

    if (state.success) {
      setSuccessModal(true);
    }
  }, [state]);

  return (
    <>
      <AlertModal
        open={successModal}
        type="success"
        setOpen={setSuccessModal}
        title="We got your email!"
        desc={
          "Thanks for your email. Our team will be in touch soon for next steps."
        }
      />
      <AlertModal
        open={errorModal}
        setOpen={setErrorModal}
        title="Oops! Something went wrong"
        desc={state.error}
      />
      <form action={formAction} className="flex flex-col gap-24">
        <input
          type="text"
          hidden
          value={JSON.stringify(categories)}
          name="categories"
          readOnly
        />
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
            {categoriesArray.map((item, index) => {
              const isSelected = categories.includes(item);

              return (
                <button
                  value={categoriesArray[index]}
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
          errorLabel={nameError}
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
            name="name"
            value={formObject.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </InputField>

        <InputField
          error={emailError}
          errorLabel={emailError}
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
            name="email"
            value={formObject.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </InputField>

        <InputField
          error={organisationError}
          errorLabel={organisationError}
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
            name="organisation"
            value={formObject.organisation}
            onChange={(e) => handleInputChange("organisation", e.target.value)}
          />
        </InputField>

        <InputField
          error={websiteError}
          errorLabel={websiteError}
          length={formObject.websiteUrl.length}
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
            name="websiteUrl"
            value={formObject.websiteUrl}
            onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
          />
        </InputField>

        <InputField
          error={messageError}
          errorLabel={messageError}
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
            name="message"
            value={formObject.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
        </InputField>

        <button className="bg-primary flex justify-center items-center gap-4 rounded-full h-20 px-4 w-full">
          {isPending ? (
            <Spinner spinnerColor="#fff" />
          ) : (
            <>
              <p className="text-white res-text-21 font-bold">SEND</p>
              <IoSend className="text-white res-text-21" />
            </>
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
