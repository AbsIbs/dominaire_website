// React
import Link from "next/link";

// UI
import { TextSlider, TextReveal } from "@/src/components/ui/text";

// Icons
import { MdNorthEast } from "react-icons/md";

const GetInTouch = () => {
  return (
    <section className="flex flex-col gap-24 items-center">
      <div className="hidden lg:block w-full">
        <TextSlider className={"h-25 md:h-50 lg:h-75"}>
          <span
            className={
              "font-extralight text-text mr-12 text-[80px] md:text-[180px] lg:text-[240px]"
            }
          >
            Ready to <span className="text-primary">dominate</span> your
            industry?
          </span>
        </TextSlider>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-480 flex flex-col gap-8 text-text lg:flex-row lg:gap-0">
          <div
            id="contact"
            className="flex-3 flex flex-col gap-16 lg:border-r lg:border-r-border lg:pr-16"
          >
            <TextReveal
              text="Contact us"
              as={"h2"}
              className="text-text font-extralight leading-none tracking-wider"
            />
            <p className="text-xl">
              Looking to elevate your company to the next level? Reach out to us
              today to discuss how our services can help you achieve your goals.
              Whether you need a new website, a mobile app, or a custom software
              solution, we&apos;re here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-xl text-textMuted font-light tracking-widest">
                  EMAIL
                </p>
                <p className="text-xl">hello@dominaire.com</p>
              </div>
            </div>
          </div>
          <div className="flex-2 flex flex-col gap-6 lg:pl-16">
            <Link
              href={"/contact-us"}
              className="flex justify-between border border-line w-full py-6 px-4 lg:px-8 hover:bg-white transition-all duration-300 hover:text-black"
            >
              <p className="text-xl">Message us</p>
              <MdNorthEast />
            </Link>
            <Link
              href={"https://calendly.com/abass-ibrahim-dominaire/30min"}
              target="_blank"
              className="flex justify-between border border-line w-full py-6 px-4 lg:px-8 hover:bg-white transition-all duration-300 hover:text-black"
            >
              <p className="text-xl">Schedule a call</p>
              <MdNorthEast />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
