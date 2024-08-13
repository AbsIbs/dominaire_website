"use client";
// React
import { useState, useRef } from "react";
// Components
import SelectButton from "../components/magneticButton/selectButton";
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
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      organisation: organisationRef.current.value,
      website: websiteRef.current.value,
      categories: categoriesData,
      message: message,
    };
    const res = await EmailHandler(data);
    console.log(res)
  };

  const preventEnterSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <form
      className="flex flex-col ~sm/lg:~gap-8/24"
      action={submitHandler}
      onKeyDown={preventEnterSubmit}
    >
      <div className="flex flex-col gap-4">
        {/* Categories input */}
        <label>
          <p className="res-text-38 font-light">I&apos;m interested in...</p>
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
                      : "text-text-normal"
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
          <p className="res-text-21 text-normal-70 font-medium">01</p>
        </div>
        <div className="flex-1 flex-col gap-2">
          <label className="res-text-28">What is your name?</label>
          <input
            className="transition-border w-full res-text-38 text-text-normal bottom-4 pb-4 border-b-2 border-b-line focus:outline-none focus:border-b-black"
            type={"text"}
            placeholder={"John Doe"}
            ref={nameRef}
          />
        </div>
      </div>
      {/* Email input */}
      <div className="flex gap-6">
        <div className="h-full">
          <p className="res-text-21 text-normal-70 font-medium">02</p>
        </div>
        <div className="flex-1 flex-col gap-2">
          <label className="res-text-28">What is your email?</label>
          <input
            className="transition-border w-full res-text-38 text-text-normal bottom-4 pb-4 border-b-2 border-b-line focus:outline-none focus:border-b-black"
            type={"text"}
            placeholder={"johndoe@gmail.com"}
            ref={emailRef}
          />
        </div>
      </div>
      {/* Organisation input */}
      <div className="flex gap-6">
        <div className="h-full">
          <p className="res-text-21 text-normal-70 font-medium">03</p>
        </div>
        <div className="flex-1 flex-col gap-2">
          <label className="res-text-28">What is your organisation?</label>
          <input
            className="transition-border w-full res-text-38 text-text-normal bottom-4 pb-4 border-b-2 border-b-line focus:outline-none focus:border-b-black"
            type={"text"}
            placeholder={"John & Doe"}
            ref={organisationRef}
          />
        </div>
      </div>
      {/* Organisation input */}
      <div className="flex gap-6">
        <div className="h-full">
          <p className="res-text-21 text-normal-70 font-medium">04</p>
        </div>
        <div className="flex-1 flex-col gap-2">
          <label className="res-text-28">What is your website url?</label>
          <input
            className="transition-border w-full res-text-38 text-text-normal bottom-4 pb-4 border-b-2 border-b-line focus:outline-none focus:border-b-black"
            type={"text"}
            placeholder={"www.johnDoe.com"}
            ref={websiteRef}
          />
        </div>
      </div>
      {/* Message input */}
      <div className="flex gap-6">
        <div className="h-full">
          <p className="res-text-21 text-normal-70 font-medium">05</p>
        </div>
        <div className="flex-1 flex-col gap-2">
          <label className="res-text-28">Message</label>
          <textarea
            className="transition-border w-full res-text-38 text-text-normal bottom-4 pb-4 border-b-2 border-b-line focus:outline-none focus:border-b-black"
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
      <button className="w-fit">
        <SelectButton>
          <p className="res-text-28 px-12">SEND</p>
        </SelectButton>
      </button>
    </form>
  );
};

export default ContactForm;
