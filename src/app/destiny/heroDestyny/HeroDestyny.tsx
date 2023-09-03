import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import HeroGame from "@/components/heroGame/HeroGame";

const title = "DESTINY 2 Boosting ";
const description =
  "Our diverse boosting services can easily help you reach your desired rank, quickly level up your character, and pass that incredibly difficult game level that has been giving you a headache. All the boosts at AskBoosters are handled by professional and experienced gamers, some of whom have been ranked as the top players in the World.";

export default function HeroDestyny() {
  return (
    <section className={style.hero}>
      <Container className={style.hero__container}>
        <HeroGame title={title} description={description} />
      </Container>
    </section>
  );
}
