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
    <div className="flex flex-col gap-8">
      <TextReveal
        text="Our Impact"
        className="res-text-60 uppercase font-semibold"
      />

      <div className="grid grid-cols-3 gap-4">
        {impact.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded bg-lightSurface-alt p-8 flex flex-col gap-12"
            >
              <div className="flex items-center justify-center rounded-full bg-surface h-20 w-20">
                <p className="res-text-38">{index + 1}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="res-text-30 text-text-on-lightSurface font-semibold">
                  {item.title}
                </p>
                <p className="res-text-21 text-text-on-lightSurface">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImpactSection;
