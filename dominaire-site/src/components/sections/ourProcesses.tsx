// NextJS
import Image from "next/image";

// Types
type Card = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

// Images
const OurPorcesses = () => {
  const data = [
    {
      title: "Audit",
      subtitle: "Review, Identify, Recommend",
      description:
        "We take a close look at how your team works today. We identify the real problems behind the symptoms. You get a clear picture of what needs to change and why.",
      image:
        "https://images.pexels.com/photos/9870232/pexels-photo-9870232.jpeg",
    },
    {
      title: "Design",
      subtitle: "Explore, Iterate, Refine",
      description:
        "We shape the solution with you. We explore options, refine ideas and create a blueprint that fits your workflow. Every decision is practical and grounded in your goals.",
      image:
        "https://images.pexels.com/photos/7414019/pexels-photo-7414019.jpeg",
    },
    {
      title: "Deploy",
      subtitle: "Build, Test, Deliver",
      description:
        "We build the final system and integrate it into your operations. Everything is tested, refined and delivered with care. You get a tool that works from day one.",
      image:
        "https://images.pexels.com/photos/12899191/pexels-photo-12899191.jpeg",
    },
  ];

  const Card = ({ title, subtitle, description, image }: Card) => {
    return (
      <div className="flex flex-col gap-8 w-full text-start text-text-on-lightSurface ">
        <div className="relative h-150 rounded-sm w-full">
          <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
          <div className="absolute bottom-0 flex flex-col gap-2 font-barlow-condensed w-3/4 pt-6 bg-lightSurface">
            <p className=" text-3xl font-medium uppercase font-semibold">{title}</p>
            <p className="uppercase tracking-widest text-lg">{subtitle}</p>
          </div>
        </div>
        <p className="w-3/4">{description}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default OurPorcesses;
