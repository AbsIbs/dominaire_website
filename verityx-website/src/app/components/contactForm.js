"use client"
// React
import { useState } from "react";
// NextUI
import { Input } from "@nextui-org/input";

const ContactForm = () => {

  const subjects = ["Project", "General Enquires"]

  const [data, setData] = useState({
    "First name": "",
    "Last name": "",
    Email: "",
    Company: "",
    Subject: subjects[0],
    Message: ""
  });

  return (
    <form className="flex col gap-24" action="">
      <Input type="text" variant="underlined" label="First name" />
      <Input type="text" variant="underlined" label="Last name" />
      <Input type="text" variant="underlined" label="Email" />
      <Input type="text" variant="underlined" label="Company" />
      <Input type="text" variant="underlined" label="Subject" />
      <Input type="text" variant="underlined" label="Message" />
    </form>
  );
}

export default ContactForm