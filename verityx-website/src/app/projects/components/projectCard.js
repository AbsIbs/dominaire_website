// NextJS
import Link from "next/link";
import Image from "next/image";
// Logic
import { matchURLFormat } from "../../logic/formatClientTitle";

const ProjectCards = ({
  clientName,
  coverImage,
  mainService,
  commenceDate,
}) => {
  return (
    <Link
      href={`/projects/${matchURLFormat(clientName)}`}
      className="flex flex-col gap-12"
    >
      <div className="relative w-full h-[600px] rounded-sm ">
        <Image
          src={coverImage}
          fill
          style={{ objectFit: "cover", borderRadius: "2px" }}
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className="res-text-38">{clientName.toUpperCase()}</p>
        <hr className="w-full border border-line" />
        <div className="flex justify-between w-full">
          <p className="res-text-base font-medium">{mainService.join(" & ")}</p>
          <p className="res-text-base">
            {new Date(commenceDate).getFullYear()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCards;