import FadeIn from "./fadeIn";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center w-full lg:h-[calc(100vh-64px)]">
      <div className="defaultWidth">
        <FadeIn>
          <div className="flex flex-col gap-12 items-center justify-center">
            <div className="flex res-text-21 gap-3 py-4 px-8 bg-[#2A2A2A] rounded-full items-center justify-center">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-[#7a7a7a]">
                Here to help you <span className="text-white">dominate</span>{" "}
                your market
              </p>
            </div>
            <p className="res-text-hero leading-none text-center max-w-[1400px] text-onSurface font-medium">
              We <span className="text-bg">Design, Develop, and Market </span>
              Your Products.
            </p>
            <p className="res-text-28 text-onSurface text-center ">
              The All-In-One Solution to{" "}
              <span className="text-bg">Grow Your Business Online</span>.
            </p>
            <Link
              href={"/#expertise"}
              className="flex items-center gap-2 bg-white py-4 px-8 rounded-full font-medium"
            >
              <p>Get Started</p>
              <ArrowDownwardRoundedIcon />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
