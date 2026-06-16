// UI
import { TextReveal } from "@/src/components/ui/text";

// Types
type Props = {
  impact: {
    title: string;
    description: string;
  }[];
};

const ImpactSection = ({ impact }: Props) => {
  return (
    <div className="flex flex-col gap-2 md:gap-8">
      <TextReveal
        text="Our Impact"
        as={"h3"}
        className="uppercase font-semibold"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {impact.map((item, index) => {
          return (
            <article
              key={index}
              className="rounded bg-lightSurface-alt p-4 md:p-8 flex flex-col gap-4 md:gap-12"
            >
              <div className="flex items-center justify-center rounded-full bg-surface h-12 w-12 md:h-20 md:w-20">
                <p className="res-text-38">{index + 1}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="res-text-38 text-text-on-lightSurface font-semibold">
                  {item.title}
                </p>
                <p className="res-text-21 text-text-on-lightSurface">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ImpactSection;
