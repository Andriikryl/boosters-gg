import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { Button } from "../button/Button";
export default function Help() {
  return (
    <section className={style.help}>
      <Container>
        <div className={style.help__box}>
          <span className={style.help__subTitle}>Need help?</span>
          <h3 className={style.help__title}>Wow experts will help you</h3>
          <p className={style.help__description}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. There are many variations of passages
            of Lorem Ipsum available.
          </p>
          <Button className={style.help__btn} type="order">
            Hire now!
          </Button>
        </div>
      </Container>
    </section>
  );
}
