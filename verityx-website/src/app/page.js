// Material UI
import SouthEastIcon from "@mui/icons-material/SouthEast";
// Components
import Hero from "./components/hero";
import TextReveal from "./components/textReveal";
import MagneticButton from "./components/magneticButton/magneticButton";
import ExpertiseSection from "./components/expertiseSection";
import ProcessesSection from "./components/processesSection"

const Home = async () => {
  return (
    <>
      <section className="h-screen flex justify-center">
        <div className="w-full">
          <Hero />
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center xpadding">
        <div className="flex gap-24 w-[1280px]">
          <div className="flex flex-[2] flex-col gap-1">
            <p className="res-text-21 text-text-normal-70">NICE TO MEET YOU</p>
            <TextReveal />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <p className="res-text-21 text-text-normal-70">
              Let's Craft Your Digital Success Story, Chapter by Chapter: We
              collaborate to develop a comprehensive strategy that tells your
              brand story and drives results.
            </p>
            <MagneticButton>
              <p className="py-2">Our expertise</p>
            </MagneticButton>
          </div>
        </div>
      </section>
      <section className="flex justify-center ypadding">
        <ExpertiseSection />
      </section>
      <section className="flex justify-center ypadding xpadding">
        <div className="flex gap-24">
          <div className="flex flex-1 flex-col gap-10">
            <p className="text-text-normal res-text-80">
              Your <span className="text-primary">pain-points</span> are our
              problem to solve
            </p>
            <p className="text-text-normal-70 res-text-21">
              Lorem ipsum dolor sit amet consectetur. Neque metus varius orci
              mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id
              mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem
              ipsum dolor sit amet consectetur. Neque metus varius orci mattis
              eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis
              mauris malesuada. Ut pulvinar urna lacus pharetra.
            </p>
          </div>
          <div className="flex flex-1 flex-col p-14 bg-surface rounded-lg gap-4">
            <p className="res-text-21 text-[#CCC]">FROM US</p>
            <p className="res-text-50 text-white">
              Lorem ipsum dolor sit amet consectetur. Neque metus varius orci
              mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id
              mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-between res-text-21">
              <div className="flex flex-col">
                <p className="text-white ">Abass Ibrahim</p>
                <p className="text-[#CCC] ">Founder and CEO</p>
              </div>
              <div className="flex gap-1">
                <p className="text-white">Get in touch</p>
                <SouthEastIcon sx={{ color: "white" }} fontSize="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex ypadding xpadding bg-black">
        <div className="flex flex-col gap-10">
          <p className="w-2/3 text-white res-text-80 leading-[125%]">
            Our robust methodology ensures that you’ll only get the best results
          </p>
          <ProcessesSection />
        </div>
      </section>
    </>
  );
};

export default Home;
