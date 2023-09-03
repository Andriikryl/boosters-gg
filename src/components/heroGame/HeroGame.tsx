import React from "react";
import { Button } from "../button/Button";
import style from "./style.module.css";

interface IHeroGame {
  title: string;
  description: string;
}

export default function HeroGame({ title, description }: IHeroGame) {
  return (
    <div className={style.hero__box}>
      <h1 className={style.hero__title}>{title}</h1>
      <p className={style.hero__description}>{description}</p>
      <Button type="button__bust">Boosting now</Button>
    </div>
  );
}
