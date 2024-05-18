// Components
import Hero from "./components/hero";
import TextReveal from "./components/textReveal";
import MagneticButton from "./components/magneticButton/magneticButton";

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
    </>
  );
};

export default Home;
