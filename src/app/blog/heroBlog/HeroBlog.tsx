import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";

export default function HeroBlog() {
  return (
    <section className={style.hero}>
      <Container>
        <h1 className={style.hero__title}>Blog</h1>
        <p className={style.hero__description}>
          Read our SkyCoach.gg review to learn about the WoW, Destiny 2 and
          other video game boosting services they offer. Discussion includes
          boosting service price, customer support and quality of boosters.
        </p>
      </Container>
    </section>
  );
}
