import FadeIn from "./fadeIn";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center w-full lg:h-screen">
      <div className="defaultWidth flex flex-col gap-16">
        <FadeIn>
          <div>
            <p className="font-bold res-text-hero leading-none">
              Dominaire<span className="text-primary">.</span>
            </p>
            <p className="res-text-28 font-light">
              We <span className="text-primary font-bold">Design</span>{" "}
              cutting-edge apps,{" "}
              <span className="text-primary font-bold">Develop</span> robust
              solutions, and{" "}
              <span className="text-primary font-bold">Market</span> to solve
              your toughest conversion challenges.
            </p>
          </div>
        </FadeIn>
        <Link
          href={"/#expertise"}
          className="flex gap-2 w-fit py-4 px-8 bg-[#F76C85]"
        >
          <p className="res-text-21 text-white">Learn more</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
