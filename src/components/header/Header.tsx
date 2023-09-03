"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Link from "next/link";
import Logo from "public/logo/logo.svg";
import Image from "next/image";
import BurgerButton from "./BurgerButton";
import BurgerSideBar from "./BurgerSideBar";
import SideNav from "./SideNav";
import HeaderNav from "./HeaderNav";

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

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeState);
  }, [activeState]);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  const handleClickSide = () => {
    setActiveStateSide((prev) => !prev);
  };
  return (
    <header className={style.header}>
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
          <SideNav activeStateSide={activeStateSide} sideLinks={sideLinks} />
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
}
