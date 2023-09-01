import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { Button } from "@/components/button/Button";

const dataCard = [
  {
    id: 1,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 2,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 3,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 4,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
];

export default function Sales() {
  return (
    <section className={style.sales}>
      <Container>
        <h3 className={style.sales__title}>Top sales</h3>
        <ul className={style.sales__list}>
          {dataCard.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <div className={style.item__info}>
                  <h4 className={style.item__title}>{item.title}</h4>
                  <div className={style.flex__group}>
                    <span className={style.item__cost}>${item.cost}</span>
                    <Button type="order">Order Now</Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
