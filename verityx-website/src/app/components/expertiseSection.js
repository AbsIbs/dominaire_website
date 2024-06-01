// Components
import TextReveal from "./textReveal";
// Material UI
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InsightsIcon from "@mui/icons-material/Insights";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CampaignIcon from "@mui/icons-material/Campaign";

const ExpertiseSection = () => {
  const icons = {
    design: <DesignServicesIcon fontSize="inherit" sx={{ color: "#fff" }} />,
    development: <CodeIcon fontSize="inherit" sx={{ color: "#fff" }} />,
    branding: <BrushIcon fontSize="inherit" sx={{ color: "#fff" }} />,
    marketing: <CampaignIcon fontSize="inherit" sx={{ color: "#fff" }} />,
    seo: <TravelExploreIcon fontSize="inherit" sx={{ color: "#fff" }} />,
    analytics: <InsightsIcon fontSize="inherit" sx={{ color: "#fff" }} />,
    consulting: (
      <BusinessCenterIcon fontSize="inherit" sx={{ color: "#fff" }} />
    ),
  };

  const StartContent = (props) => {
    return (
      <div className="w-full flex items-center font-light">
        <div className="flex-1 flex flex-col gap-2 w-full">
          <div className="flex gap-2 items-center">
            <p className="res-text-50">{icons[props.icon]}</p>
            <p className="res-text-50 text-text-normal">{props.title}</p>
          </div>
          <div className="flex flex-wrap gap-2 max-w-[80vw]">
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
    <div className="w-full flex flex-col items-center gap-20">
      <div className="w-full">
        {data.map((item, index) => (
          <div
            className="border-b border-b-[#222] flex justify-center transition-container ~sm/md:~py-6/8 w-full"
            key={index}
          >
            <div className="w-[1280px] xpadding">
              <StartContent
                icon={item.icon}
                title={item.title}
                tags={item.tags}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
