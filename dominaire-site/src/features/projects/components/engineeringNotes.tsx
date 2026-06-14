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
    <div className="flex flex-col gap-8">
      <TextReveal
        text="Engineering Notes"
        className="res-text-60 uppercase font-semibold"
      />

      <div className="flex flex-col gap-16 p-8 bg-surface rounded-2xl">
        {engineeringNotes.map((item, index) => {
          return (
            <div key={index} className="flex gap-24">
              <div className="flex-1">
                <p className="res-text-30 text-text font-semibold font-barlow-condensed">
                  {item.title}
                </p>
              </div>
              <div className="flex-1">
                <p className="res-text-21 text-text/90">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EngineeringNotes;
