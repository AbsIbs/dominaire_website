// NextJS
import Image from "next/image";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const WorkPreview = (props) => {
  return (
    <div className="flex flex-1 flex-col gap-10">
      <div className="relative h-[1320px]">
        <Image src={props.image} fill style={{ objectFit: "contain" }} />
      </div>
      <div className={`flex flex-col gap-10 ${props.xpadding}`}>
        <p className="text-text-normal res-text-50">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur.
        </p>
        <div className="flex gap-2">
          <p className="text-text-normal res-text-28">{props.title}</p>
          <NorthEastIcon sx={{ color: "#121212" }} fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default WorkPreview;
