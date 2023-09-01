import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import ArrBtn from "public/blog/Кнопка.svg";

interface IBlogCard {
  item: {
    id: number;
    date: string;
    title: string;
    description: string;
  };
}

export default function BlogCard({ item }: IBlogCard) {
  return (
    <li className={style.list__item} key={item.id}>
      <span className={style.item__date}>{item.date}</span>
      <div className={style.item__text}>
        <h4 className={style.item__title}>{item.title}</h4>
        <p className={style.item__description}>{item.description}</p>
      </div>
      <button className={style.button}>
        <Image src={ArrBtn} width={40} height={40} alt="button" />
      </button>
    </li>
  );
}
