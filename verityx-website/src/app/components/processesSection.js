"use client";
// React
import { useState } from "react";
// NextUI
import { Accordion, AccordionItem } from "@nextui-org/react";

const ProcessesSection = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  const data = [
    {
      title: "Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
    {
      title: "Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
    {
      title: "Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
    {
      title: "Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
  ];

  const StartContent = (props) => {
    const target = [...selectedKeys][0];
    return (
      <div className="flex gap-4">
        <p className="text-white res-text-38">{props.title}</p>
        <p
          className={`res-text-28 ${
            props.index == target ? "text-primary" : "text-[#CCC]"
          }`}
        >
          {props.index + 1}
        </p>
      </div>
    );
  };

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <Accordion selectedKeys={selectedKeys}>
          {data.map((item, index) => {
            const target = [...selectedKeys][0];
            return (
              <AccordionItem
                startContent={<StartContent index={index} title={item.title} />}
                key={index}
                aria-label={item.title}
                className={`p-10 rounded-t-md w-full ${
                  target == index
                    ? "bg-surface border-b-primary border-b-2"
                    : ""
                } `}
                onPress={() => setSelectedKeys(new Set([String(index)]))}
              >
                <p className="text-white res-text-21">{item.desc}</p>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="h-[1280px] relative rounded-md bg-white flex-1"></div>
    </div>
  );
};

export default ProcessesSection;
