import Image from "next/image";
import Link from "next/link";
// Components
import TextReveal from "./textReveal";
import FadeIn from "./fadeIn";
// Material UI
import NorthEastIcon from "@mui/icons-material/NorthEast";

const ExpertiseSection = () => {
  const data = [
    {
      title: "Web Development",
      image: "work1.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet risus viverra, lobortis sem ut, tempus eros.",
      services: ["UI Design", "UX Research"],
    },
    {
      title: "Web Design",
      image: "work2.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet risus viverra, lobortis sem ut, tempus eros.",
      services: ["Ecommerce", "Corporate site", "Blogs", "Bespoke apps"],
    },
    {
      title: "Online marketing",
      image: "work3.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet risus viverra, lobortis sem ut, tempus eros.",
      services: [
        "Social Media Marketing",
        "SEO",
        "Branding",
        "Email Marketing",
      ],
    },
    {
      title: "AI analytics",
      image: "work1.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet risus viverra, lobortis sem ut, tempus eros.",
      services: ["Data Analysis", "ML Models", "Consumer Insights"],
    },
  ];

  const Content = (props) => {
    const splitTitle = props.title.split(" ");
    return (
      <div className="w-full flex items-center flex-col gap-24 ">
        <div className="xpadding w-full max-w-[1280px]">
          <TextReveal
            text={splitTitle[0]}
            className="font-extralight res-text-180 leading-none"
          />
          <TextReveal
            text={splitTitle[1]}
            className="font-extralight res-text-180 leading-none"
          />
        </div>
        <div className="relative w-full h-[1100px]">
          <Image src={`/${props.image}`} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="xpadding w-full max-w-[1280px] flex flex-col gap-24">
          <TextReveal
            className={"font-extralight res-text-64 leading-none"}
            text={props.desc}
          />
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="font-light res-text-28">Services</p>
              <div>
                {props.services.map((item, index) => (
                  <div key={index}>
                    <TextReveal
                      className="res-text-38"
                      text={item.toUpperCase()}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex">
              <FadeIn
                variants={{
                  offscreen: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                <Link href={""} className="flex items-center gap-2">
                  <p className="res-text-28">Learn more</p>
                  <NorthEastIcon fontSize="large" sx={{ color: "#333" }} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[260px]">
      {data.map((item, index) => (
        <div key={index}>
          <Content
            title={item.title}
            image={item.image}
            desc={item.desc}
            services={item.services}
          />
        </div>
      ))}
    </div>
  );
};

export default ExpertiseSection;
