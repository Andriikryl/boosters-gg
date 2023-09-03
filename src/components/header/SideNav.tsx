import React from "react";
import style from "./style.module.css";
import Link from "next/link";

interface ISideNav {
  activeStateSide: boolean;
  sideLinks: {
    id: number;
    link: string;
  }[];
}

export default function SideNav({ activeStateSide, sideLinks }: ISideNav) {
  return (
    <div
      className={`${style.nav__sideBar} ${
        activeStateSide ? style.menu_active : ""
      }`}
    >
      <ul className={style.side__list}>
        {sideLinks.map((link) => {
          return (
            <li key={link.id} className={style.side__item}>
              <Link className={style.side__link} href={"/"}>
                {link.link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
