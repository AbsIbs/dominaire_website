"use client";
// React
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// UI
import { Drawer } from "@/src/components/ui/display";

// Icons
import { IoIosCall } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  // States
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Variables
  const menuItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Expertise",
      link: "/#expertise",
    },
    {
      label: "Projects",
      link: "/projects",
    },
  ];

  // UI
  const MenuButton = () => (
    <button className="md:hidden" onClick={toggleDrawer}>
      <IoMenu className="text-text text-2xl" />
    </button>
  );

  const NavDrawer = () => {
    return (
      <div className="bg-background pl-12 pr-24 pt-12 h-screen w-[60vw]">
        <div className="flex flex-col gap-16 h-full">
          <p className="res-text-base text-textMuted font-light pb-4 border-b border-b-border">
            NAVIGATION
          </p>
          <div className="flex flex-col gap-8">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link} onClick={toggleDrawer}>
                <p className="text-3xl text-text font-extralight">
                  {item.label.toUpperCase()}
                </p>
              </Link>
            ))}
          </div>
          <div className="h-full flex items-end">
            <Link href={"/"}></Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="sticky z-800 top-0 w-full flex justify-center items-center bg-background border-b border-b-border">
        <div className="flex justify-between items-center w-full h-full pl-4">
          {/* Left */}
          <div className="flex items-center gap-2">
            <MenuButton />
            <Image src={"/logos/logo_1.svg"} height={128} width={128} alt="" />
          </div>
          {/* Right */}
          <div className="h-full w-full flex items-center justify-end gap-16 text-sm">
            <div className="hidden md:block">
              <ul className="flex gap-12">
                {menuItems.map((items, index) => (
                  <Link
                    href={items.link}
                    className="nav font-barlow-condensed text-lg font-semibold"
                    key={index}
                  >
                    <p>{items.label.toUpperCase()}</p>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Link
                href={"/contact-us"}
                className="flex gap-2 justify-center items-center py-4 px-8 bg-primary"
              >
                <p className="text-text res-text-base font-bold font-barlow-condensed uppercase text-lg">
                  Let&apos;s talk
                </p>
                <IoIosCall className="text-text text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer}>
        <NavDrawer />
      </Drawer>
    </>
  );
};

export default Navbar;
