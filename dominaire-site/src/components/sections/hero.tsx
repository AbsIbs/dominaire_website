// React
import Image from "next/image";
import Link from "next/link";

// Icons
import { MdEast } from "react-icons/md";

const Hero = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-20 items-center text-center">
        <p className="text-8xl text-text leading-tightest font-light tracking-tight">
          We <span className="text-primary">Build</span> Digital Solutions{" "}
          <br /> To <span className="text-primary"> Solve</span> Your Problems
        </p>
        <p className="text-text text-xl max-w-1/2">
          Decode your lorem ipsum DNA. Bring absolute clarity to your
          organization's most critical assets with a platform designed for deep
          focus.
        </p>
        <Link
          href={"/"}
          className="py-4 px-8 bg-primary text-text rounded-full items-center flex gap-2"
        >
          <p className="font-bold uppercase tracking-widest">Get started</p>
          <MdEast className="text-text text-2xl" />
        </Link>
      </div>

      <div className="relative h-200 rounded-2xl w-full overflow-hidden">
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
