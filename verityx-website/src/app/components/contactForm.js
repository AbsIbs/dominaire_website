"use client";
// React
import { useState, useEffect, useRef, forwardRef } from "react";
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

  useEffect(() => {
    console.log(categoriesData);
  }, [categoriesData]);

  const categories = [
    "Web design",
    "Web development",
    "Branding",
    "Online marketing",
    "SEO",
    "A.I. & analytics",
    "Consulting",
  ];

  // We use forwardRef because you cannot pass in normal refs as props to funcitonal components
  const InputCard = forwardRef((props, ref) => {
    return (
      <div className="flex gap-6">
        <div className="h-full">
          <p className="res-text-21 text-normal-70 font-medium">
            0{props.step}
          </p>
        </div>
        <div className="flex-1 flex-col gap-2">
          <input
            className="transition-border w-full res-text-38 text-text-normal bottom-4 pb-4 border-b-2 border-b-line focus:outline-none focus:border-b-black"
            type={props.type}
            placeholder={props.placeholder}
            ref={ref}
          />
        </div>
      </div>
    );
  });

  const submitHandler = () => {
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
      organisation: organisationRef.current.value,
      website: websiteRef.current.value,
    });
  };

  const questions = [
    {
      type: "text",
      question: "What is your name?",
      placeholder: "John Doe",
      name: "name",
      ref: nameRef,
    },
    {
      type: "email",
      question: "What is your email?",
      placeholder: "johndoe@gmail.com",
      name: "email",
      ref: emailRef,
    },
    {
      type: "text",
      question: "What is the name of your organisation?",
      placeholder: "John & Doe inc",
      name: "organisation",
      ref: organisationRef,
    },
    {
      type: "text",
      question: "What is your website? (optional)",
      placeholder: "John Doe",
      name: "website",
      ref: websiteRef,
    },
    /*    {
      type: "text",
      question: "Your message",
      placeholder: "Hi, I would like you to help me...",
      name: "message",
    }, */
  ];

  return (
    <form className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
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
      {questions.map((item, index) => (
        <div key={index}>
          <InputCard
            step={index + 1}
            placeholder={item.placeholder}
            question={item.question}
            type={item.type}
            name={item.name}
            ref={item.ref}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={submitHandler}
        className="bg-black rounded-full text-white py-6"
      >
        click me
      </button>
    </form>
  );
};

export default ContactForm;
