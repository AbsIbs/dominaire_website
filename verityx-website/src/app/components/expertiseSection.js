"use client";
import TextReveal from "./textReveal";
import Link from "next/link";
// NextUI
import { Accordion, AccordionItem } from "@nextui-org/react";
// Material UI
import EastIcon from "@mui/icons-material/East";
const ExpertiseSection = () => {

  const desc =
    "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. ";

  const data = [
    {
      title: "Web design",
      icon: "design",
      tags: ["Desktop", "Mobile"],
      desc: desc,
    },
    {
      title: "Web development",
      icon: "development",
      tags: ["Corporate site", "Blogs", "E-commerce", "Bespoke apps"],
      desc: desc,
    },
    {
      title: "Branding",
      icon: "branding",
      tags: ["Logos", "Mockups", "Color palette", "Typography", "Style guide"],
      desc: desc,
    },
    {
      title: "Online marketing",
      icon: "marketing",
      tags: ["Social Media", "Facebook", "Google Ads"],
      desc: desc,
    },
    {
      title: "SEO",
      icon: "seo",
      tags: ["On-page", "Off-page", "Technical", "Audits"],
      desc: desc,
    },
    {
      title: "A.I. & analytics",
      icon: "analytics",
      tags: ["Data analytics", "Predictive modelling", "Bespoke ML Models"],
      desc: desc,
    },
  ];

  return (
    <div className="flex flex-col gap-24 defaultWidth xpadding">
      <div className="flex flex-col gap-2">
        <TextReveal
          className="text-white font-extralight res-text-140 leading-none"
          text={"Our"}
        />
        <TextReveal
          className="text-white font-extralight res-text-140 leading-none"
          text={"Expertise"}
        />
      </div>
      <Accordion>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.title}
            title={item.title}
            classNames={{
              title: "text-[1.75rem] text-white",
            }}
          >
            <div className="flex justify-between gap-16 text-white pb-4">
              <div className="flex-1 flex flex-col gap-8">
                <p className="res-text-28 text-[rgba(255,255,255,0.90)]">
                  {item.desc}
                </p>
                <div className="flex gap-4 items-center">
                  <p className="res-text-16 underline">Get in touch</p>
                  <Link
                    href={""}
                    className={`
                      rounded-full
                      bg-primary
                      p-2
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ease-in-out
                      hover:scale-125
                    `}
                  >
                    <EastIcon fontSize="small" sx={{ color: "white" }} />
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-8">
                <div className="flex flex-col">
                  {item.tags.map((tag, index) => (
                    <div
                      key={index}
                      className={`flex gap-6 items-center py-6 border-b ${
                        index == 0 ? "border-t border-t-[#333]" : ""
                      } border-y-[#333]`}
                    >
                      <p className="text-[#333] res-text-21">{`0${
                        index + 1
                      }`}</p>
                      <p className="res-text-21">{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ExpertiseSection;
