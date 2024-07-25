"use client";
// React
import { useCallback } from "react";
// Components
import ReviewCard from "./reviewCard";
import useEmblaCarousel from "embla-carousel-react";
// Material UI
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const ReviewSwiper = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col gap-8">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.map((review, index) => (
              <div key={index} className="embla__slide">
                <ReviewCard
                  company={review.company}
                  name={review.name}
                  role={review.role}
                  desc={review.desc}
                  jobs={review.jobs}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2">
          <button
            className="rounded-full border border-white p-4"
            onClick={scrollPrev}
          >
            <ArrowBackIosRoundedIcon sx={{ color: "white" }} />
          </button>
          <button
            className="rounded-full border border-white p-4"
            onClick={scrollNext}
          >
            <ArrowForwardIosRoundedIcon sx={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSwiper;
