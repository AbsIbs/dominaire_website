// NextJS
import Link from "next/link";
import Image from "next/image";
// Logic
import { matchURLFormat } from "../../logic/formatClientTitle";

const ProjectCards = ({
  projectName,
  coverImage,
  mainService,
  commenceDate,
}) => {
  return (
    <Link
      href={`/projects/${matchURLFormat(projectName)}`}
      className="flex flex-col gap-4 md:gap-12"
    >
      <div className="relative w-full h-[400px] md:h-[600px] rounded-sm ">
        <Image
          src={coverImage}
          fill
          style={{ objectFit: "cover", borderRadius: "2px" }}
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-6">
        <p className="res-text-38">{projectName.toUpperCase()}</p>
        <hr className="w-full border border-line" />
        <div className="flex justify-between w-full">
          <p className="res-text-21">{mainService.join(" & ")}</p>
          <p className="res-text-21">
            {new Date(commenceDate).getFullYear()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCards;