"use client";
// NextJS
import Image from "next/image";
import NorthEastIcon from "@mui/icons-material/NorthEast";
// Animation
import { motion } from "framer-motion";

const WorkPreview = (props) => {
  const variants = {
    offscreen: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={variants}
      className="flex flex-1 flex-col gap-10"
    >
      <div className="relative rounded-[2.5%] h-[600px] xl:h-[900px]">
        <Image
          src={props.image}
          fill
          style={{ objectFit: "cover", borderRadius: "2.5%" }}
        />
      </div>
      <div className={`flex flex-col gap-5 xpadding`}>
        <p className="text-text-normal res-text-28">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur.
        </p>
        <div className="flex gap-2">
          <p className="text-text-normal res-text-28">{props.title}</p>
          <NorthEastIcon sx={{ color: "#121212" }} fontSize="large" />
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPreview;
