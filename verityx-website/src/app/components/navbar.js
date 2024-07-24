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
    <Navbar className="bg-surface" shouldHideOnScroll maxWidth="full">
      {/* Left side */}
      <NavbarContent>
        <p
          className={`${nunito_sans.className} text-white res-text-21 font-medium`}
        >
          Dominaire
        </p>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
