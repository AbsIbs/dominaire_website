// NextJS
import Link from "next/link";
// Components
import Hero from "./components/hero";
import TextReveal from "./components/textReveal";
import ExpertiseSection from "./components/expertiseSection";
import WorkPreview from "./components/workPreview";
import TextSlider from "./components/textSlider/textSlider";

// Material UI
import NorthEastIcon from "@mui/icons-material/NorthEast";

const Home = async () => {
  return (
    <>
      <section className="xpadding">
        <Hero />
      </section>
      <section id="expertise" className="ypadding flex justify-center">
        <ExpertiseSection />
      </section>
      <section className="flex ypadding justify-center">
        <WorkPreview />
      </section>
      <section className="ypadding flex flex-col ~sm/lg:~gap-12/24 items-center">
        <div className="w-full">
          <TextSlider height={"h-[100px] md:h-[200px] lg:h-[300px]"}>
            <span
              className={
                "font-extralight text-white ~sm/lg:~mr-6/12 text-[80px] md:text-[180px] lg:text-[240px]"
              }
            >
              Ready to elevate your company
              <span className="textBgGradient">?</span>
            </span>
          </TextSlider>
        </div>
        <div className="w-full flex justify-center xpadding">
          <div className="defaultWidth flex flex-col gap-8 text-white lg:flex-row lg:gap-0">
            <div
              id="contact"
              className="flex-[3] flex flex-col ~sm/lg:~gap-4/16 border-r border-r-[rgba(255,255,255,0.50)] pr-16"
            >
              <TextReveal
                text="Contact us"
                className="text-white font-extralight res-text-80 leading-none tracking-wider"
              />
              <p className="res-text-21">
                Looking to elevate your company to the next level? Reach out to
                us today to discuss how our services can help you achieve your
                goals. Whether you need a new website, a mobile app, or a custom
                software solution, we&apos;re here to help.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 ~sm/lg:~gap-4/8">
                <div className="flex flex-col ~sm/lg:~gap-0/2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    EMAIL
                  </p>
                  <p className="res-text-21 underline">support@dominaire.com</p>
                </div>
                <div className="flex flex-col ~sm/lg:~gap-0/2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    INSTAGRAM
                  </p>
                  <Link
                    href={"https://www.instagram.com/dominaire.dev/"}
                    target="_blank"
                    className="res-text-21 underline"
                  >
                    dominaire.dev
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-[2] flex flex-col gap-6 lg:pl-16">
              <Link
                href={"/contact-us"}
                className="flex justify-between border border-line w-full py-6 px-4 lg:px-8 hover:bg-white hover:text-black"
              >
                <p className="res-text-21">Message us</p>
                <NorthEastIcon />
              </Link>
              <Link
                href={"https://calendly.com/abass-ibrahim-dominaire/30min"}
                target="_blank"
                className="flex justify-between border border-line w-full py-6 px-4 lg:px-8 hover:bg-white hover:text-black"
              >
                <p className="res-text-21">Schedule a call</p>
                <NorthEastIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
