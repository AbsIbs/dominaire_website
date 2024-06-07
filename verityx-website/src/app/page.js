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

// Material UI
import NorthEastIcon from "@mui/icons-material/NorthEast";

const Home = async () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section
        id="expertise"
        className="ypadding flex justify-center bg-surface"
      >
        <ExpertiseSection />
      </section>
      <section className="flex ypadding justify-center">
        <WorkPreview />
      </section>
      <section className="bg-black justify-center xpadding ypadding flex">
        <div className="defaultWidth flex flex-col ~sm/lg:~gap-12/24">
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
      <section className="items-center ypadding flex flex-col ~sm/lg:~gap-12/24">
        <div className="w-full">
          <TextSlider height={"h-[100px] md:h-[200px] lg:h-[300px]"}>
            <span
              className={
                "font-extralight ~sm/lg:~mr-6/12 text-[80px] md:text-[180px] lg:text-[240px]"
              }
            >
              Frequently Asked Questions<span className="text-primary">.</span>
            </span>
          </TextSlider>
        </div>
        <div className="xpadding w-full max-w-[1920px]">
          <FAQs />
        </div>
      </section>
      <section
        id="contact"
        className="bg-black ypadding flex flex-col ~sm/lg:~gap-12/24 items-center"
      >
        <div className="w-full">
          <TextSlider height={"h-[100px] md:h-[200px] lg:h-[300px]"}>
            <span
              className={
                "font-extralight text-white ~sm/lg:~mr-6/12 text-[80px] md:text-[180px] lg:text-[240px]"
              }
            >
              Ready to elevate your company
              <span className="text-primary">?</span>
            </span>
          </TextSlider>
        </div>
        <div className="w-full flex justify-center xpadding">
          <div className="defaultWidth flex flex-col gap-8 text-white lg:flex-row lg:gap-0">
            <div className="flex-[3] flex flex-col ~sm/lg:~gap-4/16 border-r border-r-[rgba(255,255,255,0.50)] pr-16">
              <TextReveal
                text="Contact us"
                className="text-white font-extralight res-text-80 leading-none tracking-wider"
              />
              <p className="res-text-21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sit amet risus viverra, lobortis sem ut, tempus eros.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 ~sm/lg:~gap-4/8">
                <div className="flex flex-col ~sm/lg:~gap-0/2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    EMAIL
                  </p>
                  <p className="res-text-21 underline">support@dominare.com</p>
                </div>
                <div className="flex flex-col ~sm/lg:~gap-0/2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    PHONE
                  </p>
                  <p className="res-text-21 underline">123456789</p>
                </div>
                <div className="flex flex-col ~sm/lg:~gap-0/2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    LINKEDIN
                  </p>
                  <p className="res-text-21 underline">support@dominare.com</p>
                </div>
                <div className="flex flex-col ~sm/lg:~gap-0/2">
                  <p className="res-text-21 text-[rgba(255,255,255,0.50)] font-light tracking-widest">
                    INSTAGRAM
                  </p>
                  <p className="res-text-21 underline">support@dominare.com</p>
                </div>
              </div>
            </div>
            <div className="flex-[2] flex flex-col gap-6 lg:pl-16">
              <Link
                href={"/contact-us"}
                className="flex justify-between border border-line w-full py-6 px-4 lg:px-8"
              >
                <p className="res-text-21">Email us</p>
                <NorthEastIcon sx={{ color: "white" }} />
              </Link>
              <Link
                href={""}
                className="flex justify-between border border-line w-full py-6 px-4 lg:px-8"
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
