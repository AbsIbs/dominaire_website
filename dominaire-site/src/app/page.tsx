// Sections
import { Hero, ExpertiseSection } from "@/src/components/ui/sections";

// UI
import { TextReveal } from "@/src/components/ui/text";

const Home = async () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="flex w-full justify-center px-4">
        <div className="max-w-480 flex flex-col gap-40 w-full">
          <div>
            <TextReveal text="Our" className="text-text text-9xl font-extralight" />
            <TextReveal text="Expertise" className="text-text text-9xl font-extralight" />
          </div>
          <ExpertiseSection />
        </div>
      </section>
    </>
  );
};

export default Home;
