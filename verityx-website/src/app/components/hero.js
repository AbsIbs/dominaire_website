// Material UI
import SouthEastIcon from "@mui/icons-material/SouthEast";

const Hero = () => {
    return (
      <div className="bg-[#999D9E] h-screen flex flex-col justify-between w-full xpadding py-[10vh]">
        <p className="text-white font-bold">© Verityx Studios 2024</p>
        {/* Text Row */}
        <div className="flex gap-40 justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5 py-8 px-16 rounded-full shadow-lg bg-surface w-fit">
              <div className="h-6 w-6 bg-green-800 rounded-full animate-pulse"></div>
              <p className="res-text-21 text-white">Available for work</p>
            </div>
            <p className="res-text-hero text-white flex-1">
              We empower <span className="font-bold">visionary startups</span>{" "}
              and established brands to achieve success through impactful
              design, cutting-edge development, and data-driven marketing.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <SouthEastIcon fontSize="large" sx={{ color: "white" }} />
            <div className="flex flex-col res-text-38 text-white">
              <p>Design</p>
              <p>Develop</p>
              <p>Market</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
