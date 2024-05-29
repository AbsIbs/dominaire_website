import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <p className="absolute top-8 left-6 text-white">© Dominaire Studios 2024</p>
      <Link
        href={""}
        className="fixed z-10 w-fit right-6 top-8 flex gap-2 p-8 bg-primary rounded-full"
      >
        <CallIcon sx={{ color: "white" }} fontSize="large" />
      </Link>
    </>
  );
};

export default Navbar;
