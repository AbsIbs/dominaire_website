// NextJS
import Link from "next/link";
// Material UI
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// Components
import Hero from "./components/hero";
import MagneticButton from "../app/components/magneticButton/magneticButton";
import TextReveal from "./components/textReveal";
import ExpertiseSection from "./components/expertiseSection";
import ProcessesSection from "./components/processesSection";
import WorkPreview from "./components/workPreview";
import ReviewCards from "./components/reviewCards";
import FAQs from "./components/faqs";
// Images
import work1 from "../../public/work1.png";
import work2 from "../../public/work2.png";
import work3 from "../../public/work3.png";

const Home = async () => {
  return (
    <>
      <section className="py-44 flex justify-center">
        <div className=" w-full">
          <Hero />
        </div>
      </section>
      <section>
        <div className="h-[320px] bg-surface w-full md:h-[640px] lg:h-[1280px]"></div>
      </section>
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-16 w-[1280px] xpadding items-center text-center">
          <div className="flex flex-col gap-1">
            <p className="res-text-21 text-text-normal-70">NICE TO MEET YOU</p>
            <TextReveal
              className="res-text-38"
              text={
                "We're a passionate team of experts, collaborating to craft winning digital strategies that go above and beyond."
              }
            />
          </div>
          <MagneticButton>
            <Link href={""} className="~sm/lg:~py-3/6 ~sm/lg:~px-12/40">
              <p className="res-text-28">How we work</p>
            </Link>
          </MagneticButton>
        </div>
      </section>
      <section
        id="expertise"
        className="pt-48 flex flex-col gap-24 items-center bg-surface"
      >
        <div className="flex flex-col gap-2 w-full max-w-[1280px] xpadding">
          <TextReveal
            text="Our"
            className="text-white font-extralight res-text-140 leading-none"
          />
          <TextReveal
            text="Expertise"
            className="text-white font-extralight res-text-140 leading-none"
          />
        </div>
        <div className="w-full">
          <ExpertiseSection />
        </div>
      </section>
      <section className="flex justify-center ypadding px-3">
        <div className="w-[1280px] flex">
          <div className="flex-3 flex flex-col gap-10">
            <div className="flex flex-col">
              <TextReveal
                text={"Your Pain Points"}
                className={"font-bold res-text-64 leading-tight"}
              />
              <div className="flex">
                <TextReveal
                  text={"Our Problem"}
                  className={"font-bold res-text-64 leading-tight"}
                />
                <TextReveal
                  text={"."}
                  className={"font-bold res-text-64 text-primary leading-tight"}
                />
              </div>
            </div>
            <p className="res-text-28">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
              tempus dui. Sed ut gravida quam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Duis
              ultricies risus ac dolor volutpat sodales. Suspendisse eget elit
              luctus, porttitor arcu vel, convallis urna.
            </p>
            <p className="res-text-21">
              Founder and CEO <br />
              <span className="font-semibold">Abass Ibrahim</span>
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[10rem]">
              <FormatQuoteIcon fontSize="inherit" sx={{ color: "#CCC" }} />
            </p>
          </div>
        </div>
      </section>
      <section className="flex ypadding xpadding bg-surface">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-2 xpadding">
            <TextReveal
              text="Our"
              className="text-white font-extralight res-text-140 leading-none"
            />
            <TextReveal
              text="Methodology"
              className="text-white font-extralight res-text-140 leading-none"
            />
          </div>
          <ProcessesSection />
        </div>
      </section>
      <section className="flex ypadding justify-center">
        <div className="xpadding w-[1280px] flex flex-col ~sm/lg:~gap-6/24">
          <TextReveal
            text="Our work"
            className="font-extralight res-text-140 leading-none"
          />
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-20 col-span-1">
              <WorkPreview image={work3} title={"Pulse Poetry"} />
              <WorkPreview image={work2} title={"TDM Masjid"} />
            </div>
            <div className="space-y-20 col-span-1 pt-[50%]">
              <WorkPreview image={work3} title={"Qurencia"} />
              <WorkPreview image={work1} title={"DishDelve"} />
            </div>
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
        <div className="flex flex-col ~sm/lg:~gap-4/24 w-[1280px]">
          <p className="res-text-180 text-text-normal text-center font-semibold leading-tight">
            GET IN T<span className="text-primary">O</span>UCH
          </p>
          <div className="flex gap-4 justify-center flex-col items-center md:gap-10 md:flex-row md:items-start">
            <Link
              href={"/contact-us"}
              className="border border-line rounded-full ~sm/lg:~py-4/12 ~sm/lg:~px-8/24"
            >
              <p className="res-text-38">Email us</p>
            </Link>
            <Link
              href={""}
              className="border border-line rounded-full ~sm/lg:~py-4/12 ~sm/lg:~px-8/24"
            >
              <p className="res-text-38">Book a meeting</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
