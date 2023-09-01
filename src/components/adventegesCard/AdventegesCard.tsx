import React from "react";
import style from "./style.module.css";
import Image from "next/image";

interface IAdventegesCard {
  item: {
    id: number;
    src: string;
    width: number;
    heith: number;
    alt: string;
    title: string;
    description: string;
    subTitle: string;
  };
}

export default function AdventegesCard({ item }: IAdventegesCard) {
  return (
    <li key={item.id} className={style.list__item}>
      <span className={style.sub__title}>{item.subTitle}</span>
      <span className={style.sub__decor}></span>
      <div className={style.image__box}>
        <Image
          src={item.src}
          width={item.width}
          height={item.heith}
          alt={item.alt}
        />
      </div>
      <h4 className={style.item__title}>{item.title}</h4>
      <p className={style.item__description}>{item.description}</p>
    </li>
  );
}
