// Components
import { LatestProjectCard } from "@/src/features/projects/components";

// Data
import { PROJECT_DATA } from "@/src/lib/data/projects";

const LatestProjects = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {PROJECT_DATA.map((project, index) => (
        <LatestProjectCard
          key={index}
          projectName={project.project_name}
          main_services={project.mainServices}
          image={project.coverImage}
          client_id={project.client_id}
          slug={project.slug}
        />
      ))}
    </div>
  );
};

export default LatestProjects;
