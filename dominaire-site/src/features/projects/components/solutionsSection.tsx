// UI
import { TextReveal } from "@/src/components/ui/text";

// Types
type Props = {
  solutions: {
    title: string;
    description: string;
  }[];
};

const SolutionsSection = ({ solutions }: Props) => {
  const SolutionCard = ({
    title,
    description,
    number,
  }: {
    title: string;
    description: string;
    number: number;
  }) => {
    return (
      <article className="flex flex-col md:flex-row gap-8 p-8 rounded-xl bg-surface">
        <p className="res-text-38 font-bold text-primary">0{number}</p>
        <div className="flex flex-col gap-2 md:gap-8">
          <p className="res-text-38 font-bold text-text">{title}</p>
          <p className="res-text-21 text-text">{description}</p>
        </div>
      </article>
    );
  };

  return (
    <div className="w-full flex flex-col gap-2 md:gap-8">
      <TextReveal
        text="Our Solution"
        as={"h3"}
        className="uppercase font-semibold"
      />

      <div className="flex flex-2 flex-col gap-8">
        {solutions.map((solution, index) => {
          return (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              number={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SolutionsSection;
