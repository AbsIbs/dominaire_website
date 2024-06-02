"use client";
// React
import { useState } from "react";
// NextJS
import Image from "next/image";
// NextUI
import { Accordion, AccordionItem } from "@nextui-org/react";
// Images
import Work1 from "../../../public/work1.png";
import Work2 from "../../../public/work2.png";
import Work3 from "../../../public/work3.png";

const ProcessesSection = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["0"]));
  const target = [...selectedKeys][0];

  const data = [
    {
      title: "Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
      image: Work1,
    },
    {
      title: "Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
      image: Work2,
    },
    {
      title: "Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
      image: Work3,
    },
    {
      title: "Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
      image: Work1,
    },
  ];

  const StartContent = (props) => {
    return (
      <div className="flex gap-3">
        <p className="text-white res-text-38 font-light">{props.title}</p>
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
            return (
              <AccordionItem
                startContent={<StartContent index={index} title={item.title} />}
                key={index}
                aria-label={item.title}
                className={`p-6 rounded-t-md w-full ${
                  target == index ? "bg-[#222] border-b-primary border-b-2" : ""
                } `}
                onPress={() => setSelectedKeys(new Set([String(index)]))}
              >
                <p className="text-white res-text-21">{item.desc}</p>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="hidden lg:block lg:relative lg:flex-1 lg:h-[40vw] lg:rounded-md">
        <Image
          priority
          src={data[target].image}
          fill
          style={{ objectFit: "cover", borderRadius: 6 }}
        />
      </div>
    </div>
  );
};

export default ProcessesSection;
