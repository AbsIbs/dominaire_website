"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQs = () => {
  const answer =
    "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada.";

  const data = [
    { question: "How much will it cost?", answer: answer },
    { question: "What kind of clients do you work with?", answer: answer },
    { question: "How long will it take?", answer: answer },
    { question: "How much will it cost?", answer: answer },
    { question: "How much will it cost?", answer: answer },
    { question: "How much will it cost?", answer: answer },
    { question: "How much will it cost?", answer: answer },
  ];

  return (
    <Accordion>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={item.question}
          title={item.question}
          classNames={{ title: ["text-[1.3rem]", "text-white"] }}
        >
          <p className="text-[#ffffff70] res-text-21">{item.answer}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQs;
