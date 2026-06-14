// Data
import { PROJECT_DATA } from "@/src/lib/data/projects";

// Components
import { ProjectCard } from "@/src/features/projects/components";

export const metadata = {
  title: "Our projects",
  description: "What we've done.",
};

const Page = async () => {
  return (
    <>
      <section className="flex py-48 justify-center">
        <div className="w-360 px-4 flex flex-col gap-24">
          <p className="text-8xl font-light leading-tight">Our highlights</p>
          <div className="grid gap-x-16 gap-y-12 md:gap-y-24 lg:gap-y-48 grid-cols-1 md:grid-cols-2">
            {PROJECT_DATA.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  href={`/projects/${project.client_id}/${project.slug}`}
                  commence_date={project.commence_date}
                  coverImage={project.coverImage}
                  projectName={project.project_name}
                  subServices={project.subServices}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
