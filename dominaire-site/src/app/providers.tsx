"use client";

// Components
import { ReactLenis } from "lenis/react";

// Types
type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }} />
      {children}
    </>
  );
};

export default Providers;
