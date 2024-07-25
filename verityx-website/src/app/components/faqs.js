"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQs = () => {
  const answer =
    "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada.";

  const data = [
    {
      question: "How much will it cost?",
      answer:
        "The cost of app development varies based on the project's scope, features, and complexity. We offer a detailed consultation to understand your needs and provide a tailored estimate.",
    },
    {
      question: "How long will it take to develop my app?",
      answer:
        "The timeline for app development depends on the project's complexity and specific requirements. We work closely with you to establish a timeline that meets your goals and ensures high-quality delivery. Let’s discuss your project for a more accurate timeframe.",
    },
    {
      question: "What kind of clients do you work with?",
      answer:
        "We collaborate with a diverse range of clients, from small businesses to large enterprises, tailoring our services to meet their unique needs.",
    },
    {
      question: "What is your tech stack?",
      answer:
        "Our frontend utilizes React and Next.js, while our backend predominantly uses AWS and Google Cloud. We can also adapt to provide bespoke solutions that fit your specific requirements.",
    },
    {
      question: "What platforms do you develop apps for?",
      answer:
        "We develop and deploy apps for both mobile and web platforms, ensuring seamless user experiences across devices.",
    },
    {
      question: "Can you build on my existing app?",
      answer:
        "Absolutely. We can enhance and build upon your existing app, improving functionality and user experience.",
    },
    {
      question: "Is there support after you develop our app?",
      answer:
        "Yes, we offer support for two months post-launch to ensure everything functions smoothly, addressing any bugs that may arise during this period.",
    },
  ];

  return (
    <Accordion>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={item.question}
          title={item.question}
          classNames={{ title: "text-[1.25rem] md:text-[2.375rem]" }}
        >
          <p className="res-text-21">{item.answer}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQs;
