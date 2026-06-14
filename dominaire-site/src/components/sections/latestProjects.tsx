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
          subServices={project.subServices}
          image={project.coverImage}
        />
      ))}
    </div>
  );
};

export default LatestProjects;
