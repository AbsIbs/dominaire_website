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

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const categories = [
    "Web design",
    "Web development",
    "Branding",
    "Online marketing",
    "SEO",
    "A.I. & analytics",
    "Consulting",
  ];

  return (
    <form action="" className="flex flex-col gap-4">
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
    </form>
  );
};

export default ContactForm;
