"use client";
// React
import Link from "next/link";

// UI
import { Accordion } from "@/src/components/ui/display";

// Icons
import { FaChevronRight } from "react-icons/fa6";

// Types
type AccordionTitle = {
  label: string;
};

type AccordionItem = {
  description: string;
  tags: string[];
};

// UI
const AccordionTitle = ({ label }: AccordionTitle) => {
  return (
    <div className="flex text-4xl items-center gap-2">
      <p className="uppercase">{label}</p>
    </div>
  );
};

const AccordionItem = ({ description, tags }: AccordionItem) => {
  return (
    <div className="flex flex-col justify-between gap-16 text-text md:flex-row">
      <div className="flex-1 flex flex-col gap-8">
        <p className="text-xl text-text">{description}</p>
        <div className="flex gap-4 items-center">
          <p className="res-text-21 underline">Get in touch</p>
          <Link
            href={"/#contact"}
            className={`rounded-full bg-primary p-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125`}
          >
            <FaChevronRight className="text-text" />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex flex-col">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`flex gap-6 items-center py-6 border-t ${
                index == 0 ? "border-t border-t-[#333]" : ""
              } border-y-[#333]`}
            >
              <p className="text-[rgba(255,255,255,0.30)] text-2xl">{`0${
                index + 1
              }`}</p>
              <p className="text-2xl">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExpertiseSection = () => {
  // Variables
  const data = [
    {
      title: "A.I. & Automation",
      tags: [
        "Automation Apps",
        "Data Analytics",
        "Data Visualization",
        "Bespoke ML Models",
      ],
      desc: "We help your business automate processes, saving time and money.",
    },
    {
      title: "Web design",
      tags: ["UI Design", "UX Research"],
      desc: "We create modern and visually stunning websites that perfectly suit your needs.",
    },
    {
      title: "App development",
      tags: ["SaaS", "Mobile Apps", "E-commerce"],
      desc: "We build websites tailored to your business, ensuring they are fast, secure, and easy to use.",
    },
  ];

  const dataForAccordion = data.map((item) => ({
    title: <AccordionTitle label={item.title} />,
    content: <AccordionItem description={item.desc} tags={item.tags} />,
  }));

  return <Accordion data={dataForAccordion} />;
};

export default ExpertiseSection;
