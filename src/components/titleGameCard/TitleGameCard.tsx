import React from "react";
import Image from "next/image";
import style from "./style.module.css";

interface ITitleGameCard {
  item: {
    id: number;
    src: string;
    width: number;
    heigth: number;
    alt: string;
    title: string;
  };
}

export default function TitleGameCard({ item }: ITitleGameCard) {
  return (
    <li key={item.id} className={style.card}>
      <Image src={item.src} width={item.width} height={item.heigth} alt="" />
      <h3 className={style.card__title}>{item.title}</h3>
    </li>
  );
}
