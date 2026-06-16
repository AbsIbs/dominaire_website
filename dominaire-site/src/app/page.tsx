// Sections
import {
  Hero,
  IntroductionSection,
  ExpertiseSection,
  LatestProjects,
  GetInTouch,
  OurProcesses,
} from "@/src/components/sections";

// UI
import { TextReveal } from "@/src/components/ui/text";

const Home = async () => {
  return (
    <>
      <section className="flex w-full justify-center px-4 py-24">
        <div className="max-w-480 w-full">
          <Hero />
        </div>
      </section>

      <section className="flex w-full justify-center section-padding">
        <div className="max-w-240 w-full">
          <IntroductionSection />
        </div>
      </section>

      <section className="flex w-full justify-center section-padding">
        <div className="max-w-480 flex flex-col gap-20 mg:gap-40 w-full">
          <div>
            <TextReveal
              text="Our"
              as={"h2"}
              className="text-text font-extralight"
            />
            <TextReveal
              text="Expertise"
              as={"h2"}
              className="text-text font-extralight"
            />
          </div>
          <ExpertiseSection />
        </div>
      </section>

      <section className="bg-lightSurface relative flex w-full items-center text-center justify-center section-padding">
        <div className="max-w-480 flex flex-col gap-20 mg:gap-40 w-full">
          <div>
            <TextReveal
              text="Our"
              as={"h2"}
              className="text-text-on-lightSurface font-extralight"
            />
            <TextReveal
              text="Process"
              as={"h2"}
              className="text-text-on-lightSurface font-extralight"
            />
          </div>
          <OurProcesses />
        </div>
      </section>

      <section className="flex w-full justify-center section-padding">
        <div className="max-w-480 flex flex-col gap-20 mg:gap-40 w-full">
          <div>
            <TextReveal
              text="Latest"
              as={"h2"}
              className="text-text font-extralight"
            />
            <TextReveal
              text="Projects"
              as={"h2"}
              className="text-text font-extralight"
            />
          </div>
          <LatestProjects />
        </div>
      </section>

      <section className="section-padding">
        <GetInTouch />
      </section>
    </>
  );
};

export default Home;
