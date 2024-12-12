import TextReveal from "./textReveal";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";

const IntroSection = () => {
  return (
    <div className="xpadding defaultWidth flex gap-4">
      <div className="flex-1">
        <div className="flex-1 w-64 h-64 bg-red-900"></div>
      </div>
      <div className="flex-1 flex flex-col gap-16 items-start">
        <div className="flex-1 flex gap-2 items-center justify-center">
          <GraphicEqRoundedIcon sx={{ color: "gray" }} />
          <p className="res-text-21 textBgGradient">AUTOCOMPLETE CONTENT</p>
        </div>
        <TextReveal text="Finish with the right name and text." className="text-white font-extralight res-text-120 leading-none" />
        <div className="flex gap-4">
            <div className="rounded-full w-12 h-12 border border-line"></div>
            <div className="rounded-full py-4 px-8 border border-line">
                <p className="text-white res-text-21">You dream it, we deliver it</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
