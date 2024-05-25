"use client";
// React
import { useState, useEffect } from "react";
// Components
import SelectButton from "../components/magneticButton/selectButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "d",
    categories: [],
  });

  const categoryHandler = (name) => {
    setFormData((prev) => {
      // Check if the category is already in the array
      if (prev.categories.includes(name)) {
        // Remove the category if it is already present
        return {
          ...prev,
          categories: prev.categories.filter((category) => category !== name),
        };
      } else {
        // Add the category if it is not present
        return {
          ...prev,
          categories: [...prev.categories, name],
        };
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

  const InputCard = (props) => {
    return (
      <div className="flex gap-6">
        <div className="h-full">
          <p className="res-text-21 text-normal-70 font-medium">{props.step}</p>
        </div>
        <div className="flex-1 flex-col gap-2">
          <label className="res-text-28">{props.question}</label>
          <input
            className="transition-border w-full res-text-38 text-text-normal bottom-4 pb-4 border-b-2 border-b-line focus:outline-none focus:border-b-black"
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    );
  };

  const questions = [
    {
      type: "text",
      question: "What is your name?",
      placeholder: "John Doe",
    },
    {
      type: "email",
      question: "What is your email?",
      placeholder: "johndoe@gmail.com",
    },
    {
      type: "text",
      question: "What is the name of your organisation?",
      placeholder: "John & Doe inc",
    },
    {
      type: "text",
      question: "What is your website? (optional)",
      placeholder: "John Doe",
    },
    {
      type: "text",
      question: "Your message",
      placeholder: "Hi, I would like you to help me ...",
    },
  ];

  return (
    <form action="" className="flex flex-col gap-20">
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
                <p className="res-text-38">{item}</p>
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
          />
        </div>
      ))}
    </form>
  );
};

export default ContactForm;
