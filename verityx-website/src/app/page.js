// NextJS
import Link from "next/link";
// Components
import Hero from "./components/hero";
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
// Material UI
import NorthEastIcon from "@mui/icons-material/NorthEast";

const Home = async () => {
  return (
    <>
      <section className="flex justify-center">
        <div className=" w-full">
          <Hero />
        </div>
      </section>
      <section>
        <div className="h-[320px] bg-surface w-full md:h-[640px] lg:h-[1280px]"></div>
      </section>
      <section className="h-screen flex items-center justify-center">
        <div className="flex w-[1280px] xpadding justify-center">
          <TextReveal
            className="font-light res-text-50"
            text={
              "We're a passionate team of experts, collaborating to craft winning digital strategies that go above and beyond. Our mission is to empower you to thrive online, and we achieve this by continuously refining our craft, staying ahead of industry trends, and delivering results that shatter expectations."
            }
          />
        </div>
      </section>
      <section
        id="expertise"
        className="pb-48 flex flex-col gap-24 items-center"
      >
        <div className="w-full">
          <ExpertiseSection />
        </div>
      </section>
      <section className="flex ypadding justify-center">
        <div className="w-full">
          <WorkPreview />
        </div>
      </section>
      <section className="bg-black justify-center xpadding ypadding flex">
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
      <section className="bg-black ypadding flex flex-col gap-24 items-center">
        <div className="w-full">
          <TextSlider height={"h-[320px]"}>
            <span className={"text-white font-extralight text-[240px]"}>
              Ready to elevate your company
              <span className="text-primary">?</span>
            </span>
          </TextSlider>
        </div>
        <div className="w-full flex justify-center xpadding">
          <div className="w-[1280px] flex text-white">
            <div className="flex-[3] flex flex-col gap-16 border-r border-r-[rgba(255,255,255,0.50)] pr-16">
              <TextReveal
                text="Contact us"
                className="text-white font-extralight res-text-80 leading-none tracking-wider"
              />
              <p className="res-text-21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sit amet risus viverra, lobortis sem ut, tempus eros.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    EMAIL
                  </p>
                  <p className="res-text-21 underline">support@dominare.com</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    PHONE
                  </p>
                  <p className="res-text-21 underline">123456789</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    LINKEDIN
                  </p>
                  <p className="res-text-21 underline">support@dominare.com</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    INSTAGRAM
                  </p>
                  <p className="res-text-21 underline">support@dominare.com</p>
                </div>
              </div>
            </div>
            <div className="flex-[2] flex flex-col gap-6 pl-16">
              <Link
                href={"/contact-us"}
                className="flex justify-between border border-line w-full px-8 py-6"
              >
                <p className="res-text-21">Email us</p>
                <NorthEastIcon sx={{ color: "white" }} />
              </Link>
              <Link
                href={""}
                className="flex justify-between border border-line w-full px-8 py-6"
              >
                <p className="res-text-21">Schedule a call</p>
                <NorthEastIcon sx={{ color: "white" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
