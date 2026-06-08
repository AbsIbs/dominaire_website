// Sections
import {
  Hero,
  ExpertiseSection,
  LatestProjects,
  GetInTouch,
} from "@/src/components/sections";

// UI
import { TextReveal } from "@/src/components/ui/text";

const Home = async () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="flex w-full justify-center px-4 py-48">
        <div className="max-w-480 flex flex-col gap-40 w-full">
          <div>
            <TextReveal
              text="Our"
              className="text-text text-9xl font-extralight"
            />
            <TextReveal
              text="Expertise"
              className="text-text text-9xl font-extralight"
            />
          </div>
          <ExpertiseSection />
        </div>
      </section>
      <section className="flex w-full justify-center px-4 py-48">
        <div className="max-w-480 flex flex-col gap-40 w-full">
          <div>
            <TextReveal
              text="Latest"
              className="text-text text-9xl font-extralight"
            />
            <TextReveal
              text="Projects"
              className="text-text text-9xl font-extralight"
            />
          </div>
          <LatestProjects />
        </div>
      </section>
      <section className="py-48">
        <GetInTouch />
      </section>
    </>
  );
};

export default Home;
