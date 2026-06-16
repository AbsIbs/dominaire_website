// React
import Image from "next/image";
import Link from "next/link";

// Icons
import { MdEast } from "react-icons/md";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-10 lg:gap-20 items-center text-center">
        <h1 className="text-text leading-tightest font-light tracking-tight">
          IT <span className="text-primary">Consultancy</span> Company
        </h1>
        <p className="text-text md:text-xl max-w-full md:max-w-1/2">
          We build practical systems that remove friction and make your work
          easier. Everything we create is shaped around real people.
        </p>
        <Link
          href={"/"}
          className="py-4 px-6 md:px-8 bg-primary text-text rounded-full items-center flex gap-2"
        >
          <p className="font-bold uppercase text-sm md:text-base tracking-widest">
            Get started
          </p>
          <MdEast className="text-text text-2xl" />
        </Link>
      </div>

      <div className="relative h-50 md:h-100 lg:h-200 rounded-2xl w-full overflow-hidden">
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt=""
          src={
            "https://images.pexels.com/photos/5717271/pexels-photo-5717271.jpeg"
          }
        />
      </div>
    </div>
  );
};

export default Hero;
