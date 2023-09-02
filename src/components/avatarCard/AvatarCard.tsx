import React from "react";
import style from "./style.module.css";
import Image from "next/image";

interface IAvatarCard {
  item: {
    id: number;
    name: string;
    links: string[];
    socials: {
      id: number;
      src: string;
      width: number;
      heigth: number;
      alt: string;
    }[];
    description: string;
    avatarSrc: string;
    avatarWidth: number;
    avatarHeigth: number;
    avatarAlt: string;
  };
}

export default function AvatarCard({ item }: IAvatarCard) {
  return (
    <li key={item.id} className={style.list__item}>
      <div className={style.item__info}>
        <h4 className={style.item__title}>{item.name}</h4>
        <div className={style.links__box}>
          <span className={style.links__title}>Expert on:</span>
          {item.links.map((link, index) => {
            return (
              <a className={style.links} key={index} href="#">
                {link}
              </a>
            );
          })}
        </div>
        <div className={style.socials__box}>
          {item.socials.map((social) => {
            return (
              <div key={social.id} className={style.image__box}>
                <Image
                  src={social.src}
                  width={social.width}
                  height={social.heigth}
                  alt={social.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.avatar__image}>
        <Image
          src={item.avatarSrc}
          width={item.avatarWidth}
          height={item.avatarHeigth}
          alt={item.avatarAlt}
        />
      </div>
      <p className={style.item__description}>{item.description}</p>
    </li>
  );
}
