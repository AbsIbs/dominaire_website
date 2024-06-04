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

  const Content = (props) => {
    return (
      <div className="flex items-center flex-col gap-24 ">
        <div className="xpadding w-[1280px] flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <TextReveal
                text={props.title}
                className="font-light res-text-80 leading-none"
              />
              <TextReveal
                text={`${props.commenced}`}
                className="font-light res-text-28 leading-none"
              />
            </div>
            <div className="relative w-full h-[500px] rounded-lg">
              <Image
                src={`/${props.image}`}
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <TextReveal
              className={"font-light res-text-38"}
              text={props.desc}
            />
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <p className="font-light res-text-21">Services</p>
                <div>
                  {props.services.map((item, index) => (
                    <div key={index}>
                      <TextReveal
                        className="res-text-28"
                        text={item.toUpperCase()}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex">
                <FadeIn
                  variants={{
                    offscreen: { opacity: 0, x: -25 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                >
                  <Link href={""} className="flex items-center gap-2">
                    <p className="res-text-21">Learn more</p>
                    <NorthEastIcon sx={{ color: "#333" }} />
                  </Link>
                </FadeIn>
              </div>
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
            commenced={item.commenced}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkPreview;
