// NextJS
import Link from "next/link";
// Material UI
import SouthEastIcon from "@mui/icons-material/SouthEast";
// Components
import Hero from "./components/hero";
import TextReveal from "./components/textReveal";
import MagneticButton from "./components/magneticButton/magneticButton";
import ExpertiseSection from "./components/expertiseSection";
import ProcessesSection from "./components/processesSection";
import WorkPreview from "./components/workPreview";
import KeyFactsSection from "./components/keyFactsSection/keyFactsSection";
import ReviewCards from "./components/reviewCards";
import FAQs from "./components/faqs";
// Images
import work1 from "../../public/work1.png";
import work2 from "../../public/work2.png";
import work3 from "../../public/work3.png";

const Home = async () => {
  return (
    <>
      <section className="h-screen flex justify-center">
        <div className="w-full">
          <Hero />
        </div>
      </section>
      <section className="ypadding flex items-center justify-center">
        <div className="flex flex-col gap-1 w-[1280px] xpadding">
          <p className="res-text-21 text-text-normal-70">NICE TO MEET YOU</p>
          <TextReveal
            text={
              "We're obsessed with unlocking your digital potential, and we refuse to settle for mediocrity. We're a passionate team of experts, collaborating to craft winning digital strategies that go above and beyond."
            }
          />
        </div>
      </section>
      <section id="expertise" className="flex justify-center">
        <ExpertiseSection />
      </section>
      <section className="flex justify-center ypadding px-3">
        <div className="w-[1280px] flex flex-col ~sm/lg:~p-3/14 bg-surface gap-4 rounded-lg">
          <p className="res-text-21 text-[#CCC]">FROM US</p>
          <p className="res-text-50 text-white">
            Your <span className="text-primary">pain points</span> are our
            problem. Neque metus varius orci mattis eu nunc pellentesque. Nulla
            diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar
            urna lacus pharetra. Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="flex justify-between res-text-21">
            <div className="flex flex-col">
              <p className="text-white">Abass Ibrahim</p>
              <p className="text-[#CCC]">Founder and CEO</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-white">Get in touch</p>
              <p className="text-[20px] lg:text-[40px] ">
                <SouthEastIcon sx={{ color: "white" }} fontSize="inherit" />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex ypadding xpadding bg-surface">
        <div className="flex flex-col gap-10">
          <p className="w-full text-white res-text-80 leading-[125%] 2xl:w-2/3">
            Our robust <span className="text-primary">methodology</span>
            ensures that you’ll only get the best results
          </p>
          <ProcessesSection />
        </div>
      </section>
      <section className="flex ypadding justify-center">
        <div className="flex flex-col ~sm/lg:~gap-6/24">
          <p className="xpadding res-text-80 text-center">Our latest work</p>
          <div className="flex flex-col ~sm/lg:~gap-10/20 xl:gap-5 xl:flex-row">
            <WorkPreview image={work1} title={"DishDelve"} />
            <WorkPreview image={work2} title={"TDM Masjid"} />
          </div>
          <div className="~sm/lg:~pt-10/20 xl:pt-0">
            <WorkPreview image={work3} title={"Pulse Poetry"} />
          </div>
        </div>
      </section>
      <section className="bg-surface xpadding ypadding flex">
        <div className="flex flex-col ~sm/lg:~gap-4/24">
          <p className="res-text-80 text-white text-center">
            What our <span className="text-primary">clients</span> say
          </p>
          <ReviewCards />
        </div>
      </section>
      <section className="bg-surface xpadding ypadding flex">
        <div className="flex flex-col  w-full gap-4 lg:gap-24">
          <p className="res-text-80 text-white">
            Frequently asked <span className="text-primary">questions</span>
          </p>
          <FAQs />
        </div>
      </section>
      <section className="xpadding ypadding flex justify-center">
        <div className="flex flex-col gap-24 w-[1280px]">
          <p className="res-text-180 text-text-normal text-center font-semibold">
            GET IN T<span className="text-primary">O</span>UCH
          </p>
          <div className="flex gap-10 justify-center">
            <Link href={"/contact-us"}>
              <MagneticButton>
                <p className="res-text-38">Email us</p>
              </MagneticButton>
            </Link>
            <Link href={""}>
              <MagneticButton>
                <p className="res-text-38">Book a meeting</p>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
