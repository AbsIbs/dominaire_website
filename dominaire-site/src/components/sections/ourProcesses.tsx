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
      title: "Investigation",
      subtitle: "Identifying pain points",
      description:
        "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque.",
      image:
        "https://images.pexels.com/photos/9870232/pexels-photo-9870232.jpeg",
    },
    {
      title: "Prototyping",
      subtitle: "Explore, Iterate, Refine",
      description:
        "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque.",
      image:
        "https://images.pexels.com/photos/7414019/pexels-photo-7414019.jpeg",
    },
    {
      title: "Delivery",
      subtitle: "ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque.",
      image:
        "https://images.pexels.com/photos/29377236/pexels-photo-29377236.jpeg",
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
