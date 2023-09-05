import Image from "next/image";
import Link from "next/link";
import React from "react";
import linksContact from "../footerLinks";
import style from "./style.module.css";

export default function ContactGroup() {
  return (
    <>
      {linksContact.map((item) => {
        return (
          <div key={item.id}>
            <h3 className={style.item__title}>{item.title}</h3>
            <Link className={style.item__fhone} href={"/"}>
              {item.fhone}
            </Link>
            <Link className={style.item__mail} href={"/"}>
              {item.mail}
            </Link>
            <ul className={style.item__innerList}>
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
            <ul className={style.social}>
              {item.socials.map((social) => {
                return (
                  <Link
                    key={social.id}
                    href={"/"}
                    className={style.social__item}
                  >
                    <Image
                      src={social.src}
                      width={social.width}
                      height={social.heigth}
                      alt={social.alt}
                    />
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
