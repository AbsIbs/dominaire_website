import FadeIn from "./fadeIn";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center w-full lg:h-[calc(100vh-64px)]">
      <div className="defaultWidth">
        <FadeIn>
          <p className="font-bold res-text-hero leading-none">
            Dominaire<span className="text-primary">.</span>
          </p>
          <div className="flex flex-col gap-8">
            <p className="res-text-28 font-light lg:w-[70%]">
              At Dominaire, we{" "}
              <span className="text-primary font-medium">design</span>{" "}
              cutting-edge apps to captivate users,{" "}
              <span className="text-primary font-medium">develop</span> robust
              solutions that ensure reliability, and{" "}
              <span className="text-primary font-medium">market</span>{" "}
              strategically to solve your toughest conversion challenges,
              empowering your business to dominate the market.
            </p>
            <Link
              href={"https://calendly.com/abass-ibrahim-dominaire/30min"}
              target="_blank"
              className="flex gap-2 justify-center items-center py-3 px-8 bg-primary rounded w-fit"
            >
              <p className="text-white res-text-21 font-medium">
                Schedule a 30min call
              </p>
              <EastIcon sx={{ color: "white" }} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
