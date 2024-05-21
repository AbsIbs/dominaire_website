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
    <div className="flex h-screen">
      <div className="flex flex-1 flex-col justify-between">
        <p className="res-text-80 text-text-normal leading-tight">
          Here are the facts{" "}
          <span className="text-text-normal-70">
            and nothing but the facts.
          </span>
        </p>
        <div className="flex gap-4">
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
      <div className="flex flex-1 b-l-line border-l-2 flex-col justify-between px-24">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            <div className="embla__slide ">
              <Slide1 />
            </div>
            <div className="embla__slide">
              <Slide2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFactsSection;
