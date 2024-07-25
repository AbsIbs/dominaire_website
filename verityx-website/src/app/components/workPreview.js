import Image from "next/image";
import Link from "next/link";
// Components
import TextReveal from "./textReveal";
import FadeIn from "./fadeIn";
// Material UI
import NorthEastIcon from "@mui/icons-material/NorthEast";

const WorkPreview = () => {
  const data = [
    {
      title: "Querentia",
      commenced: "2024",
      image: "work1.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet risus viverra, lobortis sem ut, tempus eros.",
      services: ["Branding", "UI Design", "Web Development"],
    },
    {
      title: "TDM Masjid",
      commenced: "2024",
      image: "work3.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet risus viverra, lobortis sem ut, tempus eros.",
      services: ["UX Research", "Branding", "Web Development"],
    },
    {
      title: "Pulse Poetry",
      commenced: "2023",
      image: "work2.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet risus viverra, lobortis sem ut, tempus eros.",
      services: ["UX Research", "Branding", "Web Development", "SEO"],
    },
  ];

  const Card = (props) => {
    return (
      <div className="flex items-center flex-col">
        <div className="flex flex-col ~sm/lg:~gap-4/12 w-full">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <TextReveal
                text={props.title}
                className="font-light res-text-38 leading-none"
              />
              <TextReveal
                text={`${props.commenced}`}
                className="font-light res-text-21 leading-none"
              />
            </div>
            <div className="relative w-full h-[600px] rounded-sm ">
              <Image
                src={`/${props.image}`}
                fill
                style={{ objectFit: "cover", borderRadius: "2px" }}
              />
            </div>
          </div>
          <div className="flex flex-col ~sm/lg:~gap-4/12">
            <div className="flex justify-between">
              <div className="flex flex-col ~sm/lg:~gap-1/3">
                <p className="font-light res-text-21">Services</p>
                <div>
                  {props.services.map((item, index) => (
                    <div key={index}>
                      <TextReveal
                        className="res-text-21"
                        text={item.toUpperCase()}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <FadeIn
                variants={{
                  offscreen: { opacity: 0, x: -25 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              ></FadeIn>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="xpadding flex flex-col items-center ~sm/lg:~gap-12/24 defaultWidth">
      <div className="flex flex-col gap-2 w-full">
        <TextReveal
          text="Latest"
          className="font-extralight res-text-140 leading-none"
        />
        <TextReveal
          text="Projects"
          className="font-extralight res-text-140 leading-none"
        />
      </div>
      <div className="flex justify-between gap-8 w-full">
        {data.map((item, index) => (
          <Link href={""} key={index} className="flex-1">
            <Card
              title={item.title}
              image={item.image}
              desc={item.desc}
              services={item.services}
              commenced={item.commenced}
            />
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href={""} className="rounded-full bg-surface py-2 px-8">
          <p className="res-text-16 text-white">See more</p>
        </Link>
      </div>
    </div>
  );
};

export default WorkPreview;
