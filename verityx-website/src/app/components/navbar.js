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
        RegalLion Studios
      </p>
    </>
  );
};

export default Navbar;
