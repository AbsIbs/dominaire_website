"use client";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
// NextUI
import { Navbar, NavbarContent } from "@nextui-org/navbar";

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
                  EXPERTISE
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  PROJECTS
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-center gap-4">
              <Link
                href={"/#contact"}
                className="flex gap-2 justify-center py-2 px-6 bg-primary rounded"
              >
                <p className="text-white res-text-base font-medium">
                  Let&rsquo;s talk
                </p>
                <EastIcon sx={{ color: "white" }} />
              </Link>
            </div>
          </div>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
