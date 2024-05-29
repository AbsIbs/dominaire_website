"use client";
// React
import { useCallback } from "react";
// Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// Components
import useEmblaCarousel from "embla-carousel-react";
// Slides
import { Slide1, Slide2 } from "./keyFacts";

const KeyFactsSection = () => {
  // Slider ref
  const [emblaRef, emblaApi] = useEmblaCarousel();

  // Slider Prev and Next
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col min-h-screen ~sm/2xl:~gap-4/10 2xl:flex-row">
      <div className="flex flex-1 flex-col justify-between xpadding">
        <p className="res-text-64 text-text-normal leading-tight">
          Here are the facts{" "}
          <span className="text-text-normal-70">
            and nothing but the facts.
          </span>
        </p>
        <div className={`hidden gap-4 2xl:flex`}>
          <button
            onClick={scrollPrev}
            className="border-2 border-line justify-center items-center rounded-full p-5"
          >
            <ChevronLeftIcon sx={{ color: "#333" }} fontSize="large" />
          </button>
          <button
            onClick={scrollNext}
            className="bg-surface justify-center items-center rounded-full p-5"
          >
            <ChevronRightIcon sx={{ color: "#fff" }} fontSize="large" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between xpadding 2xl:b-l-line 2xl:border-l-2 2xl:px-24">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            <div className="embla__slide">
              <Slide1 />
            </div>
            <div className="embla__slide">
              <Slide2 />
            </div>
          </div>
        </div>
        <div className={`gap-2 md:gap-4 flex 2xl:hidden`}>
          <button
            onClick={scrollPrev}
            className="border-2 border-line justify-center items-center rounded-full p-3 md:p-5"
          >
            <ChevronLeftIcon sx={{ color: "#333" }} fontSize="large" />
          </button>
          <button
            onClick={scrollNext}
            className="bg-surface justify-center items-center rounded-full p-3 md:p-5"
          >
            <ChevronRightIcon sx={{ color: "#fff" }} fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyFactsSection;
