"use client";
// NextJS
import Link from "next/link";
// Google Font
import { Syne } from "next/font/google";
// Components
import Typewriter from "typewriter-effect";

const syne = Syne({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="bg-surface h-screen flex items-center justify-center w-full">
      <div className="flex flex-col gap-8 lg:gap-16 w-[1280px] xpadding">
        <div className="flex flex-col gap-4 ">
          <Typewriter
            options={{
              wrapperClassName: `${syne.className} font-bold text-primary res-text-hero`,
              cursorClassName: "text-primary res-text-hero",
              strings: ["DESIGN", "DEVELOPMENT", "MARKETING"],
              autoStart: true,
              loop: true,
            }}
          />
          <p
            className={`${syne.className} text-white leading-tight font-bold res-text-hero`}
          >
            SOLUTIONS TO HELP YOUR BUSINESS GROW
          </p>
          <p className="max-w-[640px] text-[rgba(225,225,225)] res-text-21">
            Crafting imagination into innovation, through impactful design,
            cutting-edge development, and data-driven marketing.
          </p>
        </div>
        <Link
          href={""}
          className="flex items-center justify-center bg-primary ~sm/lg:~py-4/8 ~sm/lg:~px-8/16 w-fit rounded-full"
        >
          <p className="res-text-21 text-white font-bold">Our services</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
