// UI
import { TextReveal } from "@/src/components/ui/text";

// Types
type Props = {
  engineeringNotes: {
    title: string;
    description: string;
  }[];
};

const EngineeringNotes = ({ engineeringNotes }: Props) => {
  return (
    <div className="flex flex-col gap-2 md:gap-8">
      <TextReveal
        text="Engineering Notes"
        as={"h3"}
        className="uppercase font-semibold"
      />

      <div className="flex flex-col gap-16 p-8 bg-surface rounded-2xl">
        {engineeringNotes.map((item, index) => {
          return (
            <article key={index} className="flex flex-col md:flex-row md:gap-24 gap-4">
              <div className="flex-1">
                <p className="res-text-30 text-primary font-semibold font-barlow-condensed">
                  {item.title}
                </p>
              </div>
              <div className="flex-1">
                <p className="res-text-21 text-text/90">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default EngineeringNotes;
