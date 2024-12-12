"use client";
// React
import { useState, useRef } from "react";
// Components
import SelectButton from "../components/magneticButton/selectButton";
import SuccessModal from "../contact-us/components/successModal";
// Logic
import { EmailHandler } from "../logic/emailHandler";
const ContactForm = () => {
  // States
  const [categoriesData, setCategoriesData] = useState([]);
  // We use state for message input to display total count/max length
  const [message, setMessage] = useState("");

  // Refs. We use refs to avoid unnecessary rerenders when a user types
  const nameRef = useRef();
  const emailRef = useRef();
  const organisationRef = useRef();
  const websiteRef = useRef();

  // Error States
  const [categoriesError, setCategoriesError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [organisationError, setOrganisationError] = useState(false);
  const [websiteError, setWebsiteError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // Success Modla
  const [successModal, setSuccessModal] = useState(true);

  const categoryHandler = (name) => {
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

  const categories = [
    "Web design",
    "Web development",
    "Branding",
    "Online marketing",
    "SEO",
    "A.I. & Automation",
  ];

  const maxLength = 1000;

  const submitHandler = async () => {
    // reset states
    setCategoriesError(false);
    setNameError(false);
    setEmailError(false);
    setOrganisationError(false);
    setWebsiteError(false);
    setMessageError(false);

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      organisation: organisationRef.current.value,
      website: websiteRef.current.value,
      categories: categoriesData,
      message: message,
    };
    const res = await EmailHandler(data);

    // Toggle Error states
    switch (res.error) {
      case "categories":
        setCategoriesError(true);
        break;
      case "name":
        setNameError(true);
        break;
      case "email":
        setEmailError(true);
        console.log("email error");
        break;
      case "organisation":
        setOrganisationError(true);
        break;
      case "website":
        setWebsiteError(true);
        break;
      case "message":
        setMessageError(true);
        break;
    }
    if (res.error === false) {
      setSuccessModal(true);
    }
  };

  const preventEnterSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <>
      <SuccessModal open={successModal} setOpen={setSuccessModal} />
      <form
        className="flex flex-col ~sm/lg:~gap-8/24"
        action={submitHandler}
        onKeyDown={preventEnterSubmit}
      >
        <div className="flex flex-col gap-4">
          {/* Categories input */}
          <label>
            <p
              className={`${
                categoriesError ? "text-red-900" : "text-[#7a7a7a]"
              } res-text-38 font-light`}
            >
              I&apos;m interested in...
            </p>
          </label>
          <div className="flex gap-5 flex-wrap">
            {categories.map((item, index) => (
              <button
                value={categories[index]}
                key={index}
                type="button"
                onClick={(e) => categoryHandler(e.currentTarget.value)}
              >
                <SelectButton>
                  <p
                    className={`res-text-28 ${
                      categoriesData.includes(item)
                        ? "text-white"
                        : "text-[#7a7a7a]"
                    }`}
                  >
                    {item}
                  </p>
                </SelectButton>
              </button>
            ))}
          </div>
        </div>
        {/* Name input */}
        <div className="flex gap-6">
          <div className="h-full">
            <p
              className={`res-text-21 ${
                nameError ? "text-red-900" : "text-[#7a7a7a]"
              } font-medium`}
            >
              01
            </p>
          </div>
          <div className="flex-1 flex-col gap-2">
            <label
              className={`res-text-28 ${
                nameError ? "text-red-900" : ""
              }`}
            >
              What is your name?
            </label>
            <input
              className={`transition-border bg-transparent w-full res-text-38 focus:border-b-white ${
                nameError ? "text-red-900" : "text-text-normal"
              } bottom-4 pb-4 border-b-2 ${
                nameError ? "border-b-red" : "border-b-line"
              } focus:outline-none ${
                nameError ? "focus:border-b-red-900" : "focus:border-b-black"
              }`}
              type={"text"}
              placeholder={"John Doe"}
              ref={nameRef}
            />
          </div>
        </div>
        {/* Email input */}
        <div className="flex gap-6">
          <div className="h-full">
            <p
              className={`res-text-21 ${
                emailError ? "text-red-900" : "text-[#7a7a7a]"
              } font-medium`}
            >
              02
            </p>
          </div>
          <div className="flex-1 flex-col gap-2">
            <label
              className={`res-text-28 ${
                emailError ? "text-red-900" : ""
              }`}
            >
              What is your email?
            </label>
            <input
              className={`transition-border w-full res-text-38 bg-transparent focus:border-b-white ${
                emailError ? "text-red-900" : "text-text-normal"
              } bottom-4 pb-4 border-b-2 ${
                emailError ? "border-b-red" : "border-b-line"
              } focus:outline-none ${
                emailError ? "focus:border-b-red-900" : "focus:border-b-black"
              }`}
              type={"text"}
              placeholder={"johndoe@gmail.com"}
              ref={emailRef}
            />
          </div>
        </div>
        {/* Organisation input */}
        <div className="flex gap-6">
          <div className="h-full">
            <p
              className={`res-text-21 ${
                organisationError ? "text-red-900" : "text-[#7a7a7a]"
              } font-medium`}
            >
              03
            </p>
          </div>
          <div className="flex-1 flex-col gap-2">
            <label
              className={`res-text-28 ${
                organisationError ? "text-red-900" : "text-white"
              }`}
            >
              What is your organisation?
            </label>
            <input
              className={`transition-border w-full res-text-38 bg-transparent focus:border-b-white ${
                organisationError ? "text-red-900" : "text-text-normal"
              } bottom-4 pb-4 border-b-2 ${
                organisationError ? "border-b-red" : "border-b-line"
              } focus:outline-none ${
                organisationError
                  ? "focus:border-b-red-900"
                  : "focus:border-b-black"
              }`}
              type={"text"}
              placeholder={"John & Doe"}
              ref={organisationRef}
            />
          </div>
        </div>
        {/* Website input */}
        <div className="flex gap-6">
          <div className="h-full">
            <p
              className={`res-text-21 ${
                websiteError ? "text-red-900" : "text-[#7a7a7a]"
              } font-medium`}
            >
              04
            </p>
          </div>
          <div className="flex-1 flex-col gap-2">
            <label
              className={`res-text-28 ${
                websiteError ? "text-red-900" : ""
              }`}
            >
              What is your website url? (optional)
            </label>
            <input
              className={`transition-border w-full res-text-38 bg-transparent focus:border-b-white ${
                websiteError ? "text-red-900" : "text-text-normal"
              } bottom-4 pb-4 border-b-2 ${
                websiteError ? "border-b-red" : "border-b-line"
              } focus:outline-none ${
                websiteError ? "focus:border-b-red-900" : "focus:border-b-black"
              }`}
              type={"text"}
              placeholder={"www.johnDoe.com"}
              ref={websiteRef}
            />
          </div>
        </div>
        {/* Message input */}
        <div className="flex gap-6">
          <div className="h-full">
            <p
              className={`res-text-21 ${
                messageError ? "text-red-900" : "text-[#7a7a7a]"
              } font-medium`}
            >
              05
            </p>
          </div>
          <div className="flex-1 flex-col gap-2">
            <label
              className={`res-text-28 ${
                messageError ? "text-red-900" : ""
              }`}
            >
              Message
            </label>
            <textarea
              className={`transition-border w-full res-text-38 bg-transparent focus:border-b-white ${
                messageError ? "text-red-900" : "text-text-normal"
              } bottom-4 pb-4 border-b-2 ${
                messageError ? "border-b-red" : "border-b-line"
              } focus:outline-none ${
                messageError ? "focus:border-b-red-900" : "focus:border-b-black"
              }`}
              placeholder="Hi, I would like help with..."
              maxLength={maxLength}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-end w-full">
              <p className="res-text-28 text-text-normal-70">
                {message.length}/{maxLength}
              </p>
            </div>
          </div>
        </div>
        <button className="bgGradientToRight rounded-full py-4 px-10 w-fit">
          <p className="text-white res-text-28 px-12">SEND</p>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
