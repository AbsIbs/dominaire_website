import FadeIn from "./fadeIn";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-[85vh] w-full">
      <div className="flex flex-col defaultWidth justify-center h-full xpadding">
        <FadeIn>
          <p className={`text-zinc-400 leading-tight res-text-64 w-[50%]`}>
            Transforming ideas into reality with exceptional{" "}
            <span className="text-black">UI/UX, </span> cutting-edge{" "}
            <span className="text-black">development, </span>
            and strategic online <span className="text-black">marketing</span>
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
