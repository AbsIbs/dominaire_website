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
                index == 0 ? "border-t border-t-border" : ""
              } border-y-border`}
            >
              <p className="text-textMuted text-2xl">{`0${
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
      title: "Workflow Audit",
      tags: [
        "Workflow Review",
        "Bottleneck Identification",
        "Solution Recommendations",
        "Technical Assessment",
      ],
      desc: "We analyse how your team works, uncover the real sources of friction and recommend the most effective path forward. Everything starts with understanding the people behind the workflow.",
    },
    {
      title: "Automation",
      tags: ["Internal Tools", "Task Automation", "Workflow Automation"],
      desc: "We create custom tools that automate the tasks slowing your team down. Everything is built around how your people actually work.",
    },
    {
      title: "Artificial Intelligence",
      tags: [
        "Predictive Models",
        "AI Assistants",
        "Recommendation Systems",
        "Generative AI",
      ],
      desc: "We design practical AI systems that support decision making and reduce manual cognitive load.",
    },
    {
      title: "Data Insights",
      tags: ["Data Analysis", "Data Visualization", "Interactive Dashboards"],
      desc: "We help you understand your data and turn it into clear, actionable insights.",
    },
    {
      title: "Product Development",
      tags: [
        "UX Research",
        "UI Design",
        "Human Centric Design",
        "Web Applications",
        "Mobile Applications",
      ],
      desc: "We design and build digital products that solve real problems. From concept to launch, we handle the full cycle.",
    },
  ];

  const dataForAccordion = data.map((item) => ({
    title: <AccordionTitle label={item.title} />,
    content: <AccordionItem description={item.desc} tags={item.tags} />,
  }));

  return <Accordion data={dataForAccordion} />;
};

export default ExpertiseSection;
