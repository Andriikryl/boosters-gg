import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { Button } from "@/components/button/Button";
import GameCard from "@/components/gameCard/GameCard";

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
            return <GameCard key={item.id} item={item} />;
          })}
        </ul>
      </Container>
    </section>
  );
}
