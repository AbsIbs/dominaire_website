// React
import Image from "next/image";
import Link from "next/link";

// Components
import { TextReveal } from "@/src/components/ui/text";

// Types
type LatestProjectCardType = {
  projectName: string;
  image: string;
  main_services: string[];
  client_id: string;
  slug: string;
};

const LatestProjectCard = ({
  projectName,
  image,
  main_services,
  client_id,
  slug,
}: LatestProjectCardType) => {
  return (
    <Link
      href={`/projects/${client_id}/${slug}`}
      className="flex items-center flex-col"
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <TextReveal
              text={projectName}
              className="font-light text-4xl leading-none"
            />
          </div>
          <div className="relative w-full h-100 md:h-150 rounded-sm ">
            <Image
              alt={`Dominaire Project - ${projectName}`}
              src={image}
              fill
              style={{ objectFit: "cover", borderRadius: "2px" }}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-light text-xl">Services</p>
            <div>
              {main_services.map((item, index) => (
                <div key={index}>
                  <TextReveal className="text-xl" text={item.toUpperCase()} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestProjectCard;
