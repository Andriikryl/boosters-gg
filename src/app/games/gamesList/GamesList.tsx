import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import TitleGameCard from "@/components/titleGameCard/TitleGameCard";

const cardList = [
  {
    id: 1,
    src: "/TitleGameCard/cod.jpg",
    width: 260,
    heigth: 348,
    alt: "",
    title: "COD Warzone",
  },
  {
    id: 2,
    src: "/TitleGameCard/destiny.jpg",
    width: 260,
    heigth: 348,
    alt: "",
    title: "Destiny 2",
  },
  {
    id: 3,
    src: "/TitleGameCard/valorant.jpg",
    width: 260,
    heigth: 348,
    alt: "",
    title: "Valorant",
  },
  {
    id: 4,
    src: "/TitleGameCard/wow.jpg",
    width: 260,
    heigth: 348,
    alt: "",
    title: "Wow",
  },
  {
    id: 5,
    src: "/TitleGameCard/cod.jpg",
    width: 260,
    heigth: 348,
    alt: "",
    title: "COD Warzone",
  },
  {
    id: 6,
    src: "/TitleGameCard/destiny.jpg",
    width: 260,
    heigth: 348,
    alt: "",
    title: "Destiny 2",
  },
  {
    id: 7,
    src: "/TitleGameCard/valorant.jpg",
    width: 260,
    heigth: 348,
    alt: "",
    title: "Valorant",
  },
  {
    id: 8,
    src: "/TitleGameCard/wow.jpg",
    width: 260,
    heigth: 348,
    alt: "",
    title: "Wow",
  },
];

export default function GamesList() {
  return (
    <section className={style.games}>
      <Container>
        <h2 className={style.games__title}>Games</h2>
        <ul className={style.game__list}>
          {cardList.map((item) => {
            return <TitleGameCard key={item.id} item={item} />;
          })}
        </ul>
      </Container>
    </section>
  );
}
