import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";
// Font
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 py-3 px-3">
      <p
        className={`${nunito_sans.className} top-8 left-6 font-bold res-text-21`}
      >
        Dominaire Studios
      </p>
    </div>
  );
};

export default Navbar;
