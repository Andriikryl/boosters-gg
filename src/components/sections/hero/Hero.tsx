import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { Button } from "@/components/button/Button";
import Image from "next/image";
import Prevu from "public/hero/bg-content.png";
import Marquue from "@/components/Marquue/Marquue";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.flex__group}>
          <div className={style.hero__text}>
            <h1 className={style.hero__title}>
              There are many variations of passages
            </h1>
            <p className={style.hero__description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button type="button__bust">Boosting now</Button>
          </div>
        </div>
      </Container>
      <div className={style.marquue__box}>
        <Marquue />
      </div>
      <div className={style.side__box}>
        <div className={style.image__box}>
          <Image src={Prevu} width={481} height={481} alt="" />
        </div>
      </div>
    </section>
  );
}
