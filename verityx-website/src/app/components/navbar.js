"use client";
import { useState } from "react";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import Link from "next/link";
// NextUI
import { Navbar, NavbarContent } from "@nextui-org/navbar";
// MaterialUI
import { Drawer } from "@mui/material";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

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

  const MenuButton = () => (
    <button
      className="md:hidden rounded-full flex flex-col gap-1 items-center justify-center bg-surface h-12 w-12"
      onClick={() => toggleDrawer(true)}
    >
      <div className="rounded-full bg-line h-[0.5px] w-6"></div>
      <div className="rounded-full bg-line h-[0.5px] w-6"></div>
    </button>
  );

  const DrawerList = () => {
    return (
      <div className="bg-surface pl-12 pr-24 pt-12 h-full w-[60vw]">
        <div className="flex flex-col gap-16 h-full">
          <p className="res-text-base text-[#ffffff70] font-light pb-4 border-b border-b-[#ffffff70]">
            NAVIGATION
          </p>
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link} onClick={toggleDrawer}>
                <p className="res-text-64 text-white font-extralight">
                  {item.label}
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
      <Navbar className="bg-surface text-white" shouldHideOnScroll maxWidth="full">
        <NavbarContent>
          <div className="flex justify-center w-full h-full">
            <div className="h-full max-w-[1920px] w-full flex items-center justify-between">
              <div className="hidden md:block">
                <ul className="flex gap-10">
                  {menuItems.map((items, index) => (
                    <Link href={items.link} className="nav" key={index}>
                      <p className="res-text-21">{items.label}</p>
                    </Link>
                  ))}
                </ul>
              </div>
              <MenuButton />
              <div className="flex items-center justify-center gap-4">
                <Link
                  href={"/#contact"}
                  className="flex gap-2 justify-center items-center py-2 px-6 bgGradientToRight rounded-full"
                >
                  <p className="text-white res-text-base font-medium">
                    Let&rsquo;s talk
                  </p>
                  <LocalPhoneRoundedIcon sx={{ color: "white" }} />
                </Link>
              </div>
            </div>
          </div>
        </NavbarContent>
      </Navbar>
      <Drawer open={open} onClose={toggleDrawer}>
        <DrawerList />
      </Drawer>
    </>
  );
};

export default NavbarComponent;
