import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";
// Font
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <>
      <p
        className={`${nunito_sans.className} absolute top-8 left-6 font-bold res-text-21`}
      >
        dominaire
      </p>
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
