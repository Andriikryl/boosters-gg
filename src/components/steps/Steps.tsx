import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";

const stepsData = [
  {
    id: 1,
    title: "Browse the website",
    description:
      "The standard chunk of Lorem Ipsum used since the those interested.",
  },
  {
    id: 2,
    title: "Consult with us",
    description:
      "The standard chunk of Lorem Ipsum used since the those interested.",
  },
  {
    id: 3,
    title: "Ordering",
    description:
      "The standard chunk of Lorem Ipsum used since the those interested.",
  },
  {
    id: 4,
    title: "All set",
    description:
      "The standard chunk of Lorem Ipsum used since the those interested.",
  },
];

export default function Steps() {
  return (
    <section className={style.steps}>
      <Container>
        <h3 className={style.steps__title}>Fast and easy boosting steps</h3>
        <ul className={style.steps__list}>
          {stepsData.map((step) => {
            return (
              <li className={style.step__item} key={step.id}>
                <h4 className={style.item__title}>{step.title}</h4>
                <p className={style.item__description}>{step.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
