// UI
import { TextReveal } from "@/src/components/ui/text";

// Type
type Props = {
  problem: string;
};

const ProblemSection = ({ problem }: Props) => {
  return (
    <div className="flex flex-col gap-8 w-full text-text max-w-3/4">
      <TextReveal text="The Problem" className="res-text-60 uppercase font-semibold" />
      <p className="text-text res-text-21">{problem}</p>
    </div>
  );
};

export default ProblemSection;
