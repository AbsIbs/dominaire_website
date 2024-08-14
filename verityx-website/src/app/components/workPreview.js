import Image from "next/image";
import Link from "next/link";
// Components
import TextReveal from "./textReveal";
import FadeIn from "./fadeIn";
// Supabase
import { createClient } from "../../../utils/supabase/server";

const WorkPreview = async () => {
  // Fetch Data
  const supabase = createClient();
  const { data, error } = await supabase
    .from("project")
    .select(`*, client!inner(name, id)`)
    .order("commence_date", { ascending: false })
    .limit(3);

  const formatYear = (date) => {
    const year = new Date(date).getFullYear();
    return year;
  };

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
                text={`${formatYear(props.commenced)}`}
                className="font-light res-text-21 leading-none"
              />
            </div>
            <div className="relative w-full h-[400px] md:h-[600px] rounded-sm ">
              <Image
                src={props.image}
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
      <div className="flex flex-col xl:flex-row justify-between xl:gap-8 gap-16 w-full">
        {data.map((item, index) => (
          <Link
            href={`/projects/${item.client.name.toLowerCase()}`}
            key={index}
            className="flex-1"
          >
            <Card
              title={item.client.name}
              image={item.coverImage}
              desc={item.desc}
              services={item.services}
              commenced={item.commence_date}
            />
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={"/projects"}
          className="rounded-full bg-surface py-4 px-10 flex justify-center items-center"
        >
          <p className="res-text-16 text-white">See more</p>
        </Link>
      </div>
    </div>
  );
};

export default WorkPreview;
