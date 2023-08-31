import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";
import ClipboardCopy from "./ClipboardCopy/ClipboardCopy";
import { Button } from "@/components/button/Button";
import { CircleProgressBar } from "./CircleProgressBar/CircleProgressBar";

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

export default function Info() {
  const PROGRESS_STROKE_WIDTH = 6;
  const progressPercents = 80;
  return (
    <section className={style.info}>
      <Container className={style.info__container}>
        <ul className={style.card__list}>
          {cardData.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <div className={style.style__box}>
                  <div className={style.line}></div>
                  <div className={style.star}></div>
                  <div className={style.line}></div>
                </div>
                <div className={style.item__image}>
                  <Image
                    src={item.MainImg}
                    width={item.width}
                    height={item.heigth}
                    alt={item.alt}
                  />
                  <div className={style.progress__box}>
                    <span className={style.progress__number}>
                      {item.progress}
                    </span>
                    <CircleProgressBar
                      progressPercents={progressPercents}
                      strokeWidth={PROGRESS_STROKE_WIDTH}
                    />
                  </div>
                </div>
                <ul className={style.item__innerlist}>
                  {item.cards.map((card) => {
                    return (
                      <li key={card.id} className={style.inner__item}>
                        <Image
                          src={card.src}
                          width={card.width}
                          height={card.heigth}
                          alt={card.alt}
                        />
                      </li>
                    );
                  })}
                </ul>
                <div className={style.raite__box}>
                  <span className={style.raite__title}>{item.raiteTitle}</span>
                </div>
                <span className={style.item__discount}>
                  {item.discount}% Discount
                </span>
                <div className={style.code__box}>
                  <span className={style.promocode__title}>Promocode:</span>
                  <ClipboardCopy copyText={item.promocode} />
                  <span className={style.code}>{item.promocode}</span>
                </div>
                <div className={style.button__group}>
                  <Button type="read">Read Review</Button>
                  <Button type="order">Order Now</Button>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
