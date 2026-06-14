// React
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// UI
import {
  ProjectHeader,
  ProblemSection,
  SolutionsSection,
  ImpactSection,
  EngineeringNotes,
} from "@/src/features/projects/components";

// Data
import { CLIENT_DATA } from "@/src/lib/data/clients";
import { PROJECT_DATA } from "@/src/lib/data/projects";

// Types
import { ClientId } from "@/src/lib/data/clients";

type Props = {
  params: Promise<{ clientId: ClientId; projectSlug: string }>;
};

/* export const generateMetadata = async ({ params }) => {
  const title = params;

  return {
    title: `${title.name} | Dominaire`,
    description: `Our project with ${title.name}.`,
  };
}; */

const Page = async ({ params }: Props) => {
  const currentParams = await params;
  const { clientId, projectSlug } = currentParams;

  const clientData = CLIENT_DATA[clientId];
  const projectData = PROJECT_DATA.find(
    (project) => project.slug == projectSlug,
  );

  if (!projectData) {
    notFound();
  }

  return (
    <div className="py-16">
      <section className="pb-48">
        <div className="flex gap-4 items-center justify-center">
          <div className="flex flex-col gap-24 w-360">
            <ProjectHeader
              tech_stack={projectData.tech_stack}
              clientName={clientData.name}
              description={projectData.description}
              subServices={projectData.subServices}
              site_url={projectData.site_url}
              title={projectData.title}
              commence_date={projectData.commence_date}
            />
          </div>
        </div>
      </section>

      <section className="py-48">
        <div className="flex gap-4 items-center justify-center">
          <div className="w-360">
            <ProblemSection problem={projectData.problem.description} />
          </div>
        </div>
      </section>

      <section className="py-48 px-4">
        <div className="flex justify-center">
          <div className="flex flex-col gap-24">
            {projectData.problem.media.map((item, index) => {
              if (item.type == "image") {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden w-full"
                  >
                    <Image
                      src={item.src}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                );
              }

              if (item.type == "video") {
                return (
                  <div
                    key={index}
                    className="relative flex flex-col gap-2 overflow-hidden max-w-480"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={item.src}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <p className="text-textMuted res-text-21">{item.caption}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section className="py-48">
        <div className="flex gap-4 items-center justify-center">
          <div className="w-360">
            <SolutionsSection solutions={projectData.solution.content} />
          </div>
        </div>
      </section>

      <section className="py-48 px-4">
        <div className="flex justify-center">
          <div className="flex flex-col gap-24">
            {projectData.solution.media.map((item, index) => {
              if (item.type == "image") {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden w-full"
                  >
                    <Image
                      src={item.src}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                );
              }

              if (item.type == "video") {
                return (
                  <div
                    key={index}
                    className="relative flex flex-col gap-2 overflow-hidden max-w-480"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={item.src}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <p className="text-textMuted res-text-21">{item.caption}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      {projectData.engineering_notes && (
        <section className="py-48">
          <div className="flex gap-4 items-center justify-center">
            <div className="w-360">
              <EngineeringNotes
                engineeringNotes={projectData.engineering_notes}
              />
            </div>
          </div>
        </section>
      )}

      <section className="py-48">
        <div className="flex gap-4 items-center justify-center">
          <div className="w-360">
            <ImpactSection impact={projectData.impact} />
          </div>
        </div>
      </section>

      <section className="flex justify-center py-48">
        <div className="flex items-center">
          <Link
            href={"/projects"}
            className="hover:text-surface hover:bg-text duration-300 transition-all py-4 px-12 border border-text text-text rounded-full res-text-30"
          >
            All projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
