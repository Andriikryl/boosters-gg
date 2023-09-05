"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Link from "next/link";
import Logo from "public/logo/logo.svg";
import Image from "next/image";
import BurgerButton from "./BurgerButton";
import BurgerSideBar from "./BurgerSideBar";
import SideNav from "./SideNav";
import HeaderNav from "./HeaderNav";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  {
    id: 1,
    link: "Home",
    href: "/home",
  },
  {
    id: 2,
    link: "Games",
    href: "/games",
  },
  {
    id: 3,
    link: "Services",
    href: "/services",
  },
  {
    id: 4,
    link: "Blog",
    href: "/blog",
  },
  {
    id: 5,
    link: "About us",
    href: "/about",
  },
  {
    id: 6,
    link: "Contacts",
    href: "/contacts",
  },
];

const sideLinks = [
  {
    id: 1,
    link: "WoW Boosting",
    href: "/wow",
  },
  {
    id: 2,
    link: "Destiny 2 Boosting",
    href: "/destiny",
  },
  {
    id: 3,
    link: "Fifa Boosting",
    href: "/fifa",
  },
  {
    id: 4,
    link: "COD War Zone Boosting",
    href: "/cod",
  },
  {
    id: 5,
    link: "Valorant Boosting",
    href: "/valorant",
  },
  {
    id: 6,
    link: "Overwatch Boosting",
    href: "/overwatch",
  },
  {
    id: 7,
    link: "Lol Boosting",
    href: "/lol",
  },
  {
    id: 8,
    link: "Dota 2 Boosting",
    href: "/dota",
  },
  {
    id: 9,
    link: "GTA5 Boosting",
    href: "/gta",
  },
  {
    id: 10,
    link: "APEX Boosting",
    href: "/apex",
  },
  {
    id: 11,
    link: "Battlefield",
    href: "/battlefield",
  },
  {
    id: 12,
    link: "Fortnite Boosting",
    href: "/fortnite",
  },
];

export default function Header() {
  const [activeState, setActiveState] = useState(false);
  const [activeStateSide, setActiveStateSide] = useState(false);
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]
  );
  const backdropFilter = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["blur(0px)", "blur(20px)"]
  );
  const borderWidth = useTransform(scrollYProgress, [0, 0.01, 0.02], [0, 0, 1]);
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["0 0 0 rgba(0,0,0,0)", "3px 3px 0 rgba(0,0,0,0.12)"]
  );

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeState);
  }, [activeState]);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeStateSide);
  }, [activeStateSide]);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  const handleClickSide = () => {
    setActiveStateSide((prev) => !prev);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (sideNavRef.current && !sideNavRef.current.contains(e.target as Node)) {
      setActiveStateSide(false);
    }
  };
  useEffect(() => {
    if (activeStateSide) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [activeStateSide]);

  return (
    <motion.header
      className={style.header}
      initial="hidden"
      whileInView="visible"
      style={{
        backgroundColor,
        backdropFilter,
        borderWidth,
        borderStyle: "solid",
        borderColor: "rgb(112, 90, 102)",
        boxShadow,
      }}
    >
      <Container className={style.header__container}>
        <BurgerSideBar
          onClick={handleClickSide}
          activeState={activeStateSide}
        />
        <div className={style.header__box}>
          <Link href={"/"}>
            <Image src={Logo} width={270} height={57} alt="Booster gg" />
          </Link>
          <HeaderNav activeState={activeState} links={links} />
          <div ref={sideNavRef}>
            <SideNav activeStateSide={activeStateSide} sideLinks={sideLinks} />
          </div>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </motion.header>
  );
}
