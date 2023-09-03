import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
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
  {
    id: 5,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 6,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 7,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 8,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 9,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 10,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 11,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
  {
    id: 12,
    title: "Competitive Play Unlock Competitive Play Unlock",
    cost: 1.99,
  },
];

export default function TopSailling() {
  return (
    <section className={style.sailling}>
      <Container>
        <h2 className={style.sailling__title}>
          🔥Top Selling Offers This Week🔥
        </h2>
        <ul className={style.sales__list}>
          {dataCard.map((item) => {
            return <GameCard key={item.id} item={item} />;
          })}
        </ul>
      </Container>
    </section>
  );
}
