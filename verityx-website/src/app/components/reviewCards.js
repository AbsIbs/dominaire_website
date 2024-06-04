"use client";
// Material UI
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InsightsIcon from "@mui/icons-material/Insights";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CampaignIcon from "@mui/icons-material/Campaign";
// Components
import FadeIn from "./fadeIn";

const ReviewCards = () => {
  const maxLength = 200;
  const desc =
    "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut.";

  const icons = {
    design: <DesignServicesIcon fontSize="inherit" sx={{ color: "#E9204F" }} />,
    development: <CodeIcon fontSize="inherit" sx={{ color: "#E9204F" }} />,
    branding: <BrushIcon fontSize="inherit" sx={{ color: "#E9204F" }} />,
    marketing: <CampaignIcon fontSize="inherit" sx={{ color: "#E9204F" }} />,
    seo: <TravelExploreIcon fontSize="inherit" sx={{ color: "#E9204F" }} />,
    analytics: <InsightsIcon fontSize="inherit" sx={{ color: "#E9204F" }} />,
    consulting: (
      <BusinessCenterIcon fontSize="inherit" sx={{ color: "#E9204F" }} />
    ),
  };

  const data = [
    {
      company: "TDM Masjid",
      desc: desc,
      name: "Name",
      role: "CEO",
      jobs: [
        { name: "UI Design", icon: "design" },
        { name: "Web Development", icon: "development" },
        { name: "Branding", icon: "branding" },
      ],
    },
    {
      company: "Pulse Poetry",
      desc: desc,
      name: "Name",
      role: "CEO",
      jobs: [
        { name: "UI Design", icon: "design" },
        { name: "Web Development", icon: "development" },
        { name: "Branding", icon: "branding" },
      ],
    },
    {
      company: "Querentia",
      desc: desc,
      name: "Name",
      role: "CEO",
      jobs: [
        { name: "UI Design", icon: "design" },
        { name: "Web Development", icon: "development" },
        { name: "Branding", icon: "branding" },
      ],
    },
  ];

  const Card = (props) => {
    return (
      <FadeIn viewport={{ once: true, amount: 0.5 }}>
        <div className="flex flex-col gap-8 p-16 shadow-2xl bg-surface text-white rounded-md relative">
          <div className="flex-2 flex flex-col gap-3 pb-10">
            <p className="res-text-21 font-light">
              {props.name}, {props.company}
            </p>
            <p className="res-text-38">{props.desc}</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {props.jobs.map((job, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-center border border-[#333] rounded-full py-2 px-8"
              >
                <p className="text-[36px]">{icons[job.icon]}</p>
                <p className="res-text-21 font-light">{job.name}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    );
  };

  return (
    <div className="flex flex-col gap-10">
      {data.map((review, index) => (
        <div key={index}>
          <Card
            company={review.company}
            name={review.name}
            role={review.role}
            desc={review.desc}
            jobs={review.jobs}
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewCards;
