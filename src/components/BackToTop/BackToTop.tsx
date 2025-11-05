"use client";

import { useState, useEffect } from "react";
import styles from "./backtotop.module.css";

interface BackToTopProps {
  backgroundColor?: string;
}

export default function BackToTop({ backgroundColor = "rgb(219, 41, 26)" }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const hoverColor = backgroundColor === "rgb(42, 35, 34)"
    ? "rgb(32, 25, 24)"
    : "rgb(192, 36, 22)";

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.backToTop}
          aria-label="Back to top"
          style={{
            backgroundColor,
            ["--hover-bg-color" as string]: hoverColor,
          }}
        >
          <span className={styles.arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="none" viewBox="0 0 17 15">
              <path fill="#fff" d="M0 14.637 8.463 0l8.442 14.637z"/>
            </svg>
          </span>
          <span className={styles.text}>TOP</span>
        </button>
      )}
    </>
  );
}
