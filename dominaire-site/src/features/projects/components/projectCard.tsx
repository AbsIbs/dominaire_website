// React
import Link from "next/link";
import Image from "next/image";

// UI
import { TextReveal } from "@/src/components/ui/text";

// Types
type Props = {
  href: string;
  projectName: string;
  coverImage: string;
  subServices: string[];
  commence_date: Date;
};

const ProjectCard = ({
  href,
  projectName,
  coverImage,
  subServices,
  commence_date,
}: Props) => {
  return (
    <Link href={`${href}`} className="flex flex-col gap-4 md:gap-12">
      <div className="relative w-full h-100 md:h-150 rounded-sm ">
        <Image
          src={coverImage}
          fill
          alt=""
          style={{ objectFit: "cover", borderRadius: "2px" }}
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-6">
        <div>
          <p className="res-text-38">{projectName.toUpperCase()}</p>
          <p className="res-text-21 text-textMuted">{commence_date.getFullYear()}</p>
        </div>
        <hr className="w-full border border-border" />
        <div>
          {subServices.map((item, index) => (
            <div key={index}>
              <TextReveal className="text-xl" text={item.toUpperCase()} />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
