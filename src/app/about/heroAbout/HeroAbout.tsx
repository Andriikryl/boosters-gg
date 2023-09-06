import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";

export default function HeroAbout() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.hero__box}>
          <h1 className={style.hero__title}>About US</h1>
          <p className={style.hero__description}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.{" "}
          </p>
        </div>
      </Container>
    </section>
  );
}
