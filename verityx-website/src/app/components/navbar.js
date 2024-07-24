"use client";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";
// NextUI
import { Navbar, NavbarContent } from "@nextui-org/navbar";
// Font
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const NavbarComponent = () => {
  return (
    <Navbar className="bg-white" shouldHideOnScroll maxWidth="full">
      {/* Left side */}
      <NavbarContent>
        <div className="flex justify-center w-full h-full">
          <div className="h-full max-w-[1920px] w-full flex items-center justify-between">
            <ul className="flex gap-8 res-text-base font-medium">
              <li>
                <Link href="/" className="hover:text-primary">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  PROJECTS
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link
                href={"https://calendly.com/abass-ibrahim-dominaire/30min"}
                target="_blank"
                className="flex gap-2 justify-center py-3 px-8 bg-primary rounded-sm"
              >
                <p className="text-white res-text-base">Call us</p>
                <CallIcon className="text-white" />
              </Link>
              <Link
                href={"/#contact"}
                className="flex justify-center border border-surface py-3 px-8 rounded-sm hover:bg-surface hover:text-white"
              >
                <p className="res-text-base">Contact us</p>
              </Link>
            </div>
          </div>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
