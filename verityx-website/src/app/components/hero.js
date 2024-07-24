import FadeIn from "./fadeIn";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center w-full lg:h-[calc(100vh-64px)]">
      <div className="defaultWidth flex flex-col gap-16">
        <FadeIn>
          <div>
            <p className="font-bold res-text-hero leading-none">
              Dominaire<span className="text-primary">.</span>
            </p>
            <p className="res-text-28 font-light">
              We <span className="text-primary font-bold">design</span>{" "}
              cutting-edge apps,{" "}
              <span className="text-primary font-bold">develop</span> robust
              solutions, and{" "}
              <span className="text-primary font-bold">market</span> to solve
              your toughest conversion challenges.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
