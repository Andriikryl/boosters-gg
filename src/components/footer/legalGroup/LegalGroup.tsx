import React from "react";
import style from "./style.module.css";
import { linksLegal } from "../footerLinks";
import Link from "next/link";

export default function LegalGroup() {
  return (
    <>
      {linksLegal.map((item) => {
        return (
          <div key={item.id} className={style.list__group}>
            <h3 className={style.list__title}>{item.titel}</h3>
            <ul className={style.inner__list}>
              {item.links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link className={style.inner__item} href={"/"}>
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
