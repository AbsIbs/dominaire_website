// NextJS
import Link from "next/link";
// Components
import Hero from "./components/hero";
import MagneticButton from "../app/components/magneticButton/magneticButton";
import TextReveal from "./components/textReveal";
import ExpertiseSection from "./components/expertiseSection";
import WorkPreview from "./components/workPreview";
import ReviewCards from "./components/reviewCards";
import FAQs from "./components/faqs";
import TextSlider from "./components/textSlider/textSlider";
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
      <section className="flex ypadding justify-center">
        <div className="xpadding w-[1280px] flex flex-col ~sm/lg:~gap-6/24">
          <div className="flex flex-col gap-2 w-full max-w-[1280px] xpadding">
            <TextReveal
              text="Our"
              className="font-extralight res-text-140 leading-none"
            />
            <TextReveal
              text="Work"
              className="font-extralight res-text-140 leading-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-20 col-span-1">
              <WorkPreview date="2024" image={work3} title={"Pulse Poetry"} />
              <WorkPreview date="2024" image={work2} title={"TDM Masjid"} />
            </div>
            <div className="space-y-20 col-span-1 pt-[50%]">
              <WorkPreview date="2024" image={work3} title={"Qurencia"} />
              <WorkPreview date="2023" image={work1} title={"DishDelve"} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#161414] justify-center xpadding ypadding flex">
        <div className="w-[1280px] flex flex-col ~sm/lg:~gap-4/24">
          <div className="flex flex-col gap-2 w-full max-w-[1280px]">
            <TextReveal
              text="Our"
              className="text-white font-extralight res-text-140 leading-none"
            />
            <TextReveal
              text="Reviews"
              className="text-white font-extralight res-text-140 leading-none"
            />
          </div>
          <ReviewCards />
        </div>
      </section>
      <section className="items-center ypadding flex flex-col gap-24">
        <div className="w-full">
          <TextSlider height={"h-[300px]"}>
            <span className={"font-extralight text-[240px]"}>
              Frequently Asked Questions<span className="text-primary">.</span>
            </span>
          </TextSlider>
        </div>
        <div className="xpadding w-[1280px] flex flex-col gap-4 lg:gap-24">
          <FAQs />
        </div>
      </section>
      <section className="bg-surface ypadding flex justify-center">
        <div className="w-full">
          <TextSlider height={"h-[320px]"}>
            <span className={"text-white font-extralight text-[240px]"}>
              Come and get in touch with us
              <span className="text-primary">.</span>
            </span>
          </TextSlider>
        </div>
      </section>
    </>
  );
};

export default Home;
