// Material UI
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InsightsIcon from "@mui/icons-material/Insights";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CampaignIcon from "@mui/icons-material/Campaign";

const ReviewCard = (props) => {
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

  return (
    <div className="flex flex-col ~sm/lg:~gap-2/8 ~sm/lg:~p-6/16 shadow-2xl bg-surface text-white rounded-md relative">
      <div className="flex-2 flex flex-col ~sm/lg:~gap-1/3 ~sm/lg:~pb-4/10">
        <p className="res-text-21 font-light">
          {props.name}, {props.company}
        </p>
        <p className="res-text-38">{props.desc}</p>
      </div>
      <div className="flex flex-wrap ~sm/lg:~gap-2/6">
        {props.jobs.map((job, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-center border border-[#333] rounded-full py-2 ~sm/lg:~px-4/8"
          >
            <p className="res-text-38">{icons[job.icon]}</p>
            <p className="res-text-21 font-light">{job.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
