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
      tags: ["UI Design", "UX Research"],
      desc: "We create modern and visually stunning websites that perfectly suit your needs.",
    },
    {
      title: "Web development",
      icon: "development",
      tags: ["Corporate site", "Blogs", "E-commerce", "Bespoke apps", "No-code"],
      desc: "We build websites tailored to your business, ensuring they are fast, secure, and easy to use.",
    },
    {
      title: "Branding",
      icon: "branding",
      tags: ["Logos", "Mockups", "Color palette", "Typography", "Style guide"],
      desc: "We create a unique identity for your brand, helping to set you apart from the competition.",
    },
    {
      title: "Online marketing",
      icon: "marketing",
      tags: ["Social Media", "Facebook", "Google Ads"],
      desc: "We use proven strategies to help your business reach a wider audience and drive more conversions.",
    },
    {
      title: "SEO",
      icon: "seo",
      tags: ["On-page", "Off-page", "Technical", "Audits"],
      desc: "We help your website rank higher in search engine results, improving visibility and driving more traffic.",
    },
    {
      title: "A.I. & analytics",
      icon: "analytics",
      tags: ["Data analytics", "Predictive modelling", "Bespoke ML Models"],
      desc: "We use advanced technologies to gain valuable insights from your data, helping you make data-driven decisions.",
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
            title={item.title.toUpperCase()}
            classNames={{
              title: "text-[2.5rem] text-white",
            }}
          >
            <div className="flex justify-between gap-16 text-white pb-4">
              <div className="flex-1 flex flex-col gap-8">
                <p className="res-text-28 text-[rgba(255,255,255,0.80)]">
                  {item.desc}
                </p>
                <div className="flex gap-4 items-center">
                  <p className="res-text-21 underline">Get in touch</p>
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
                      className={`flex gap-6 items-center py-6 border-t ${
                        index == 0 ? "border-t border-t-[#333]" : ""
                      } border-y-[#333]`}
                    >
                      <p className="text-[rgba(255,255,255,0.30)] res-text-28">{`0${
                        index + 1
                      }`}</p>
                      <p className="res-text-28">{tag}</p>
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
