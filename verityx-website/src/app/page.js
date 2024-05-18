// Components
import Hero from "./components/hero"
import TextReveal from "./components/textReveal";

const Home = async () => {
  return (
    <>
      <section className="h-screen flex justify-center">
        <div className="w-full">
          <Hero />
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center xpadding">
        <div className="flex gap-24">
          <div className="flex flex-[2] flex-col gap-1">
            <p className="res-text-21 text-text-normal-70">NICE TO MEET YOU</p>
            <TextReveal />
          </div>
          <div className="flex flex-1 flex-col justify-end h-full">
            <p className="res-text-28 text-text-normal-70">
              Let's Craft Your Digital Success Story, Chapter by Chapter: We
              collaborate to develop a comprehensive strategy that tells your
              brand story and drives results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
