// React
import Image from "next/image";

// Components
import { TextReveal } from "@/src/components/ui/text";

// Types
type LatestProjectCardType = {
  projectName: string;
  image: string;
  services: string[];
};

const LatestProjectCard = ({
  projectName,
  image,
  services,
}: LatestProjectCardType) => {
  return (
    <div className="flex items-center flex-col">
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
              {services.map((item, index) => (
                <div key={index}>
                  <TextReveal className="text-xl" text={item.toUpperCase()} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjectCard;
