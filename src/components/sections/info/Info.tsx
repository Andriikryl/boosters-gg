import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";
import ClipboardCopy from "../../ClipboardCopy/ClipboardCopy";
import { Button } from "@/components/button/Button";
import { CircleProgressBar } from "../../CircleProgressBar/CircleProgressBar";
import CardInfo from "@/components/cardInfo/CardInfo";
import SpliteCard from "@/components/splitCard/SpliteCard";

const cardData = [
  {
    id: 1,
    MainImg: "/card/sponsor.png",
    width: 218,
    heigth: 46,
    alt: "SkyCouch",
    cards: [
      {
        id: "a1",
        src: "/card/paypal.svg",
        width: 35,
        heigth: 9,
        alt: "PayPal",
      },
      {
        id: "a2",
        src: "/card/visa.svg",
        width: 39,
        heigth: 15,
        alt: "visa",
      },
      {
        id: "a3",
        src: "/card/bitcoin.svg",
        width: 40,
        heigth: 8,
        alt: "bitcoin",
      },
    ],
    raiteTitle: "Trustpilot",
    discount: 10,
    promocode: "5F223GR22M",
    readBtn: "Read Review",
    orderBtn: "Order Now",
    progress: "4,1",
  },
  {
    id: 2,
    MainImg: "/card/sponsor.png",
    width: 218,
    heigth: 46,
    alt: "SkyCouch",
    cards: [
      {
        id: "a1",
        src: "/card/paypal.svg",
        width: 35,
        heigth: 9,
        alt: "PayPal",
      },
      {
        id: "a2",
        src: "/card/visa.svg",
        width: 39,
        heigth: 15,
        alt: "visa",
      },
      {
        id: "a3",
        src: "/card/bitcoin.svg",
        width: 40,
        heigth: 8,
        alt: "bitcoin",
      },
    ],
    raiteTitle: "Trustpilot",
    discount: 10,
    promocode: "5F223GR22M",
    readBtn: "Read Review",
    orderBtn: "Order Now",
    progress: "4,1",
  },
  {
    id: 3,
    MainImg: "/card/sponsor.png",
    width: 218,
    heigth: 46,
    alt: "SkyCouch",
    cards: [
      {
        id: "a1",
        src: "/card/paypal.svg",
        width: 35,
        heigth: 9,
        alt: "PayPal",
      },
      {
        id: "a2",
        src: "/card/visa.svg",
        width: 39,
        heigth: 15,
        alt: "visa",
      },
      {
        id: "a3",
        src: "/card/bitcoin.svg",
        width: 40,
        heigth: 8,
        alt: "bitcoin",
      },
    ],
    raiteTitle: "Trustpilot",
    discount: 10,
    promocode: "5F223GR22M",
    readBtn: "Read Review",
    orderBtn: "Order Now",
    progress: "4,1",
  },
];

const SplitecardData = [
  {
    id: 1,
    MainImg: "/card/sponsor.png",
    width: 218,
    heigth: 46,
    alt: "SkyCouch",
    cards: [
      {
        id: "a1",
        src: "/card/paypal.svg",
        width: 35,
        heigth: 9,
        alt: "PayPal",
      },
      {
        id: "a2",
        src: "/card/visa.svg",
        width: 39,
        heigth: 15,
        alt: "visa",
      },
      {
        id: "a3",
        src: "/card/bitcoin.svg",
        width: 40,
        heigth: 8,
        alt: "bitcoin",
      },
    ],
    raiteTitle: "Trustpilot",
    discount: 10,
    promocode: "5F223GR22M",
    readBtn: "Read Review",
    orderBtn: "Order Now",
    progress: "4,1",
  },
  {
    id: 2,
    MainImg: "/card/sponsor.png",
    width: 218,
    heigth: 46,
    alt: "SkyCouch",
    cards: [
      {
        id: "a1",
        src: "/card/paypal.svg",
        width: 35,
        heigth: 9,
        alt: "PayPal",
      },
      {
        id: "a2",
        src: "/card/visa.svg",
        width: 39,
        heigth: 15,
        alt: "visa",
      },
      {
        id: "a3",
        src: "/card/bitcoin.svg",
        width: 40,
        heigth: 8,
        alt: "bitcoin",
      },
    ],
    raiteTitle: "Trustpilot",
    discount: 10,
    promocode: "5F223GR22M",
    readBtn: "Read Review",
    orderBtn: "Order Now",
    progress: "4,1",
  },
];

export default function Info() {
  const PROGRESS_STROKE_WIDTH = 6;
  const progressPercents = 80;
  return (
    <section className={style.info}>
      <Container className={style.info__container}>
        <div className={style.list__box}>
          <ul className={style.card__list}>
            {cardData.map((item) => {
              return (
                <CardInfo
                  key={item.id}
                  item={item}
                  progressPercents={progressPercents}
                  PROGRESS_STROKE_WIDTH={PROGRESS_STROKE_WIDTH}
                />
              );
            })}
          </ul>
          <ul className={style.card__split}>
            {SplitecardData.map((item) => {
              return (
                <SpliteCard
                  key={item.id}
                  item={item}
                  progressPercents={progressPercents}
                  PROGRESS_STROKE_WIDTH={PROGRESS_STROKE_WIDTH}
                />
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
