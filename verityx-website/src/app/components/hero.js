import FadeIn from "./fadeIn";
import Link from "next/link";
// Material UI
import EastIcon from "@mui/icons-material/East";

const Hero = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center w-full lg:h-screen">
      <div className="flex defaultWidth items-center h-full xpadding">
        <FadeIn>
          <div className="flex flex-col gap-8">
            <p
              className={`w-full text-zinc-400 leading-tight res-text-64 lg:w-[75%]`}
            >
              Solving your <span className="text-black">pain points</span>{" "}
              through innovative <span className="text-black">solutions</span>{" "}
              one step at a time.
            </p>
            <Link
              href={"/expertise"}
              className="flex items-center gap-2 w-fit py-4 px-8 bg-surface rounded-sm"
            >
              <p className="text-white res-text-21">What we do</p>
              <EastIcon sx={{ color: "white" }} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
