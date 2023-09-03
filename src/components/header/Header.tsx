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
  },
  {
    id: 2,
    link: "Games",
  },
  {
    id: 3,
    link: "Services",
  },
  {
    id: 4,
    link: "Blog",
  },
  {
    id: 5,
    link: "About us",
  },
  {
    id: 6,
    link: "Contacts",
  },
];

const sideLinks = [
  {
    id: 1,
    link: "WoW Boosting",
  },
  {
    id: 2,
    link: "Destiny 2 Boosting",
  },
  {
    id: 3,
    link: "Fifa Boosting",
  },
  {
    id: 4,
    link: "COD War Zone Boosting",
  },
  {
    id: 5,
    link: "Valorant Boosting",
  },
  {
    id: 6,
    link: "Overwatch Boosting",
  },
  {
    id: 7,
    link: "Lol Boosting",
  },
  {
    id: 8,
    link: "Dota 2 Boosting",
  },
  {
    id: 9,
    link: "GTA5 Boosting",
  },
  {
    id: 10,
    link: "APEX Boosting",
  },
  {
    id: 11,
    link: "Overwatch 2 Boosting",
  },
  {
    id: 12,
    link: "Fortnite Boosting",
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
