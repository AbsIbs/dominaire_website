"use client";
// Font
import { Nunito_Sans } from "next/font/google";
// Components
import Typewriter from "typewriter-effect";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-8 lg:gap-16 w-[1280px] justify-center h-full xpadding">
        <div className="flex flex-col gap-4 ">
          <Typewriter
            options={{
              wrapperClassName: `font-light italic res-text-hero`,
              cursorClassName: `font-light res-text-hero`,
              strings: ["design", "development", "marketing"],
              autoStart: true,
              loop: true,
            }}
          />
          <p
            className={`${nunito_sans.className} font-light leading-none res-text-hero`}
          >
            solutions to help your business grow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
