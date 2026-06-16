"use client";
// React
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// UI
import { Drawer } from "@/src/components/ui/display";

// Icons
import { IoIosCall, IoMdClose } from "react-icons/io";
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
      label: "Projects",
      link: "/projects",
    },
  ];

  const NavDrawer = () => {
    return (
      <div className="bg-background px-8 py-12 h-dvh w-screen">
        <div className="flex flex-col gap-16 h-full">
          <div className="flex justify-between pb-4 border-b border-b-border">
            <p className="res-text-base text-textMuted font-light ">
              NAVIGATION
            </p>
            <button onClick={toggleDrawer}>
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>
          <ul className="flex flex-col gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link} onClick={toggleDrawer}>
                  <p className="text-3xl text-text font-extralight">
                    {item.label.toUpperCase()}
                  </p>
                </Link>
              </li>
            ))}
            <Link href={"/contact-us"} onClick={toggleDrawer}>
              <p className="text-3xl text-text font-extralight">
                CONTACT
              </p>
            </Link>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="px-4 flex z-800 sticky top-0 h-16 w-full md:hidden justify-center items-center bg-linear-to-b from-black to-transparent">
        <div className="flex justify-between w-full">
          <Image
            height={128}
            width={128}
            src={"/logos/Honeydew_1.svg"}
            alt=""
          />
          <button
            onClick={toggleDrawer}
            className="rounded-full flex items-center justify-center p-3 bg-primary"
          >
            <IoMenu className="text-text text-2xl" />
          </button>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="sticky hidden z-800 top-0 h-16 w-full md:flex justify-center items-center bg-background border-b border-b-border">
        <div className="h-full w-full flex items-center justify-end gap-16 text-sm">
          <ul className="flex gap-12">
            {menuItems.map((items, index) => (
              <li key={index}>
                <Link
                  href={items.link}
                  className="nav font-barlow-condensed text-lg font-semibold"
                >
                  <p>{items.label.toUpperCase()}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center h-full gap-4">
            <Link
              href={"/contact-us"}
              className="flex gap-2 justify-center items-center h-full px-8 bg-primary"
            >
              <p className="text-text res-text-base font-bold font-barlow-condensed uppercase lg:text-lg">
                Let&apos;s talk
              </p>
              <IoIosCall className="text-text text-2xl" />
            </Link>
          </div>
        </div>
      </nav>

      <Drawer open={open} onClose={toggleDrawer}>
        <NavDrawer />
      </Drawer>
    </>
  );
};

export default Navbar;
