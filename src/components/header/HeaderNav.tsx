"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./style.module.css";
import ButtonSearch from "./buttonsHeader/ButtonSearch";

interface IHeaderNav {
  activeState: boolean;
  links: {
    id: number;
    link: string;
    href: string;
  }[];
}

export default function HeaderNav({ activeState, links }: IHeaderNav) {
  return (
    <nav className={`${style.nav} ${activeState ? style.menu_active : ""}`}>
      <ul className={style.nav__list}>
        {links.map((link) => {
          return (
            <li key={link.id} className={style.list__item}>
              <Link className={style.item__link} href={link.href}>
                {link.link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
