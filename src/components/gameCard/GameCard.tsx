import React from "react";
import style from "./style.module.css";
import { Button } from "../button/Button";

interface IGameCard {
  item: {
    id: number;
    title: string;
    cost: number;
  };
}

export default function GameCard({ item }: IGameCard) {
  return (
    <li className={style.list__item}>
      <div className={style.item__info}>
        <h4 className={style.item__title}>{item.title}</h4>
        <div className={style.flex__group}>
          <span className={style.item__cost}>${item.cost}</span>
          <Button type="order">Order Now</Button>
        </div>
      </div>
    </li>
  );
}
