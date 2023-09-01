import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";
import AdventegesCard from "@/components/adventegesCard/AdventegesCard";

const adventegesData = [
  {
    id: 1,
    src: "/adventeges/succeed-svgrepo-com 1.svg",
    width: 93,
    heith: 93,
    alt: "",
    title: "Proven results",
    description:
      "The standard chunk of Lorem Ipsum used since the those interested.",
    subTitle: "800 Pros ",
  },
  {
    id: 2,
    src: "/adventeges/succeed-svgrepo-com 1.svg",
    width: 93,
    heith: 93,
    alt: "",
    title: " Friendly support",
    description:
      "The standard chunk of Lorem Ipsum used since the those interested.",
    subTitle: "157К Successful deals ",
  },
  {
    id: 3,
    src: "/adventeges/succeed-svgrepo-com 1.svg",
    width: 93,
    heith: 93,
    alt: "",
    title: "Max safe",
    description:
      "The standard chunk of Lorem Ipsum used since the those interested.",
    subTitle: "42k heppy clients",
  },
  {
    id: 4,
    src: "/adventeges/succeed-svgrepo-com 1.svg",
    width: 93,
    heith: 93,
    alt: "",
    title: "Proven results",
    description:
      "The standard chunk of Lorem Ipsum used since the those interested.",
    subTitle: "800 Pros ",
  },
];

export default function Adventeges() {
  return (
    <section className={style.adventeges}>
      <Container>
        <h3 className={style.adventeges__title}>Advantages</h3>
        <ul className={style.adventeges__list}>
          {adventegesData.map((item) => {
            return <AdventegesCard key={item.id} item={item} />;
          })}
        </ul>
      </Container>
    </section>
  );
}
