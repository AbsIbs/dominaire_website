"use client";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

type Props = {
  open: boolean;
};

export const useLockScroll = ({ open }: Props) => {
  const lenis = useLenis();

  // Stop lenis from allow scroll whilst the modal is open
  // We also prevent propogation in the inner div to allow children of the modal to scroll but not the whole page
  useEffect(() => {
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open, lenis]);
};
