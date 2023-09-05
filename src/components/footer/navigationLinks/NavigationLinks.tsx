import React from "react";
import style from "./style.module.css";
import { navigationLinks } from "../footerLinks";
import Link from "next/link";

export default function NavigationLinks() {
  return (
    <>
      {navigationLinks.map((item) => {
        return (
          <div key={item.id}>
            <h3 className={style.item__title}>{item.titel}</h3>
            <ul className={style.item__list}>
              {item.links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link className={style.inner__link} href={"/"}>
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
