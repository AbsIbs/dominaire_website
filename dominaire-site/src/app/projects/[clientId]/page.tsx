// Data
import { PROJECT_DATA } from "@/src/lib/data/projects";
import { CLIENT_DATA } from "@/src/lib/data/clients";

// Components
import { ProjectCard } from "@/src/features/projects/components";

export const metadata = {
  title: "Our projects",
  description: "What Dominaire has done.",
};

// Types
import { ClientId } from "@/src/lib/data/clients";

type Props = {
  params: Promise<{ clientId: ClientId }>;
};

const Page = async ({ params }: Props) => {
  const currentParams = await params;
  const { clientId } = currentParams;

  const clientProjects = PROJECT_DATA.filter(
    (project) => project.client_id == clientId,
  );

  return (
    <>
      <section className="flex section-padding justify-center">
        <div className="w-360 px-4 flex flex-col gap-24">
          <h1 className="font-light leading-tight">
            Our projects with {CLIENT_DATA[clientId].name}
          </h1>
          <div className="grid gap-x-16 gap-y-12 md:gap-y-24 lg:gap-y-48 grid-cols-1 md:grid-cols-2">
            {clientProjects.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  href={`/projects/${clientId}/${project.slug}`}
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
