"use client";
import React from "react";
import style from "./style.module.css";
import Arrow from "../icons/Arrow";

export default function BackToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={style.button} onClick={scrollToTop}>
      <Arrow />
    </button>
  );
}
