"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Link from "next/link";
import Logo from "public/logo/logo.svg";
import Image from "next/image";
import BurgerButton from "./BurgerButton";

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

export default function Header() {
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeState);
  }, [activeState]);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__box}>
          <Link href={"/"}>
            <Image src={Logo} width={270} height={57} alt="Booster gg" />
          </Link>
          <nav
            className={`${style.nav} ${activeState ? style.menu_active : ""}`}
          >
            <ul className={style.nav__list}>
              {links.map((link) => {
                return (
                  <li key={link.id} className={style.list__item}>
                    <Link className={style.item__link} href={"/"}>
                      {link.link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
}
