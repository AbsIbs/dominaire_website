// React
import { notFound } from "next/navigation";

// UI
import { ProjectHeader } from "@/src/features/projects/components";

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
    <section className="px-4 py-16">
      <div className="flex gap-4 items-center justify-center">
        <div className="flex flex-col ~sm/lg:~gap-12/24 w-360">
          <ProjectHeader
            clientName={clientData.name}
            description={projectData.description}
            main_services={projectData.main_services}
            site_url={projectData.site_url}
            title={projectData.title}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
