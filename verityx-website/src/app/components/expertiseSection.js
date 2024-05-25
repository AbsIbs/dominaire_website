"use client";
// Components
import StationaryButton from "./magneticButton/stationaryButton"
// Material UI
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InsightsIcon from "@mui/icons-material/Insights";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CampaignIcon from "@mui/icons-material/Campaign";
// NextUI
import { Accordion } from "@nextui-org/accordion";
import { AccordionItem } from "@nextui-org/accordion";

const ExpertiseSection = () => {
  const icons = {
    design: <DesignServicesIcon fontSize="inherit" sx={{ color: "#121212" }} />,
    development: <CodeIcon fontSize="inherit" sx={{ color: "#121212" }} />,
    branding: <BrushIcon fontSize="inherit" sx={{ color: "#121212" }} />,
    marketing: <CampaignIcon fontSize="inherit" sx={{ color: "#121212" }} />,
    seo: <TravelExploreIcon fontSize="inherit" sx={{ color: "#121212" }} />,
    analytics: <InsightsIcon fontSize="inherit" sx={{ color: "#121212" }} />,
    consulting: (
      <BusinessCenterIcon fontSize="inherit" sx={{ color: "#121212" }} />
    ),
  };

  const StartContent = (props) => {
    return (
      <div className="w-full flex items-center">
        <div className=" flex flex-col gap-2 ">
          <div className="flex gap-2 items-center">
            <p className="res-text-50">{icons[props.icon]}</p>
            <p className="res-text-50 text-text-normal">{props.title}</p>
          </div>
          <div className="flex gap-2">
            {props.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 text-text-normal font-semibold"
                >
                  <p>{tag.toUpperCase()}</p>
                  {index == props.tags.length - 1 ? null : <p>•</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const data = [
    {
      title: "Web design",
      icon: "design",
      tags: ["Desktop", "Mobile"],
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
    {
      title: "Web development",
      icon: "development",
      tags: ["Corporate site", "blogs", "e-commerce", "bespoke apps"],
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
    {
      title: "Branding",
      icon: "branding",
      tags: ["logos", "mockups", "color palette", "typography", "style guide"],
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
    {
      title: "Online marketing",
      icon: "marketing",
      tags: ["Instagram", "Facebook", "Google Ads"],
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
    {
      title: "SEO",
      icon: "seo",
      tags: ["on-page", "off-page", "technical", "audits"],
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
    {
      title: "A.I. & analytics",
      icon: "analytics",
      tags: ["Data analytics", "Predictive modelling", "Bespoke ML Models"],
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
    {
      title: "Consulting",
      icon: "consulting",
      tags: ["Data", "Strategy", "IT"],
      desc: "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full justify-center items-center py-24 border-b-line border-b-2">
        <div className="w-[1280px] flex flex-col gap-5">
          <p className="res-text-21 text-text-normal-70">OUR EXPERTISE</p>
          <p className="res-text-38 text-text-normal">
            Our vast expereince and range of services help solve complex
            business problems with a personalized approach to each task.
          </p>
        </div>
      </div>
      <Accordion className="flex flex-col items-center">
        {data.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              aria-label={item.title}
              className="py-24 max-w-[1280px] w-full"
              startContent={
                <StartContent
                  icon={item.icon}
                  title={item.title}
                  tags={item.tags}
                />
              }
            >
              <div className="flex flex-col gap-8 w-fit">
                <p className="text-text-normal res-text-21">{item.desc}</p>
                <StationaryButton>
                  <p className="text-text-normal res-text-28">discuss this project</p>
                </StationaryButton>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExpertiseSection;
