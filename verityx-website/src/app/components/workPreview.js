"use client";
// NextJS
import Image from "next/image";
import NorthEastIcon from "@mui/icons-material/NorthEast";
// Components
import FadeIn from "./fadeIn";

const WorkPreview = (props) => {
  const viewport = { once: true, amount: 0.05 };

  return (
    <FadeIn viewport={viewport}>
      <div className="flex flex-1 flex-col gap-5">
        <div className="relative rounded-lg h-[600px] xl:h-[900px]">
          <Image
            src={props.image}
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="res-text-28">
          <div className="flex items-center gap-2">
            <p>{props.title.toUpperCase()}</p>
            <NorthEastIcon fontSize="large" sx={{ color: "#333" }} />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default WorkPreview;
