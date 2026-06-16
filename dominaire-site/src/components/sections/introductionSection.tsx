const IntroductionSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-light uppercase rounded-full bg-lightSurface py-2 px-6 w-fit text-text-on-lightSurface">
        Nice to meet you
      </p>
      <p className="text-text leading-[150%] res-text-48">
        We partner with teams to understand how they work and what holds them
        back. Our approach blends engineering, design and clear thinking to
        create solutions that fit naturally into your operations. We focus on
        the people behind the workflow so every tool feels intuitive, reduces
        effort and supports real day to day work.
      </p>
    </div>
  );
};

export default IntroductionSection;
