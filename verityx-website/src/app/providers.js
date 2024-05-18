"use client";
// Components
import { ReactLenis } from "lenis/react";
import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <NextUIProvider>{children}</NextUIProvider>
    </ReactLenis>
  );
};

export default Providers;
