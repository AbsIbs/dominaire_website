// React
import Link from "next/link";
import Image from "next/image";

// Types
type Props = {
  slug: string;
  projectName: string;
  coverImage: string;
  mainServices: string[];
};

const ProjectCard = ({
  slug,
  projectName,
  coverImage,
  mainServices,
}: Props) => {
  return (
    <Link href={`/projects/${slug}`} className="flex flex-col gap-4 md:gap-12">
      <div className="relative w-full h-100 md:h-150 rounded-sm ">
        <Image
          src={coverImage}
          fill
          alt=""
          style={{ objectFit: "cover", borderRadius: "2px" }}
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-6">
        <p className="res-text-38">{projectName.toUpperCase()}</p>
        <hr className="w-full border border-line" />
        <div className="flex justify-between w-full">
          <p className="res-text-21">{mainServices.join(" & ")}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
