"use client";
// Styles
import styles from "./styles.module.scss";
// React
import { useState } from "react";
// Framer Motion
import { AnimatePresence } from "framer-motion";
// Components
import Nav from "./Nav"


export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </>
  );
}
