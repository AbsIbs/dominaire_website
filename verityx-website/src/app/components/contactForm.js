"use client";
// React
import { useState, useRef } from "react";
// Components
import SelectButton from "../components/magneticButton/selectButton";

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
    "A.I. & analytics",
    "Consulting",
  ];

  const maxLength = 1000;

  const submitHandler = () => {
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
      organisation: organisationRef.current.value,
      website: websiteRef.current.value,
      categories: categoriesData,
      message: message,
    });
  };

  return (
    <form className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        {/* Categories input */}
        <label htmlFor="">
          <p className="res-text-38 font-light">I'm interested in...</p>
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
                  className={`res-text-38 ${
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
          <input
            className="transition-border w-full res-text-38 text-text-normal bottom-4 pb-4 border-b-2 border-b-line focus:outline-none focus:border-b-black"
            type={"text"}
            placeholder={"Hi, I would like help with..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={maxLength}
          />
          <div className="flex justify-end w-full">
            <p className="res-text-28 text-text-normal-70">
              {message.length}/{maxLength}
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={submitHandler}
        className="w-fit"
      >
        <SelectButton>
          <p className="res-text-28 px-12 py-5">SEND</p>
        </SelectButton>
      </button>
    </form>
  );
};

export default ContactForm;
