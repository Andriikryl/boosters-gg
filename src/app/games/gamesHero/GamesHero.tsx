import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";
import { CircleProgressBar } from "@/components/CircleProgressBar/CircleProgressBar";
import { Button } from "@/components/button/Button";
import ClipboardCopy from "@/components/ClipboardCopy/ClipboardCopy";

const cardData = [
  {
    id: 1,
    src: "/card/bitcoin.svg",
    width: 56,
    heigth: 11,
    alt: "",
  },
  {
    id: 2,
    src: "/card/paypal.svg",
    width: 49,
    heigth: 12,
    alt: "",
  },
  {
    id: 3,
    src: "/card/visa.svg",
    width: 55,
    heigth: 21,
    alt: "",
  },
  {
    id: 4,
    src: "/card/visa.svg",
    width: 55,
    heigth: 21,
    alt: "",
  },
  {
    id: 5,
    src: "/card/visa.svg",
    width: 55,
    heigth: 21,
    alt: "",
  },
];

export default function GamesHero() {
  const PROGRESS_STROKE_WIDTH = 6;
  const progressPercents = 80;
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.hero__box}>
          <div className={style.flex__group}>
            <Image
              src={"/card/sponsor.png"}
              width={183}
              height={38}
              alt="sponsor"
            />
            <div className={style.progress__box}>
              <span className={style.progress__number}>4.1</span>
              <CircleProgressBar
                progressPercents={progressPercents}
                strokeWidth={PROGRESS_STROKE_WIDTH}
              />
            </div>
          </div>
          <h1 className={style.hero__title}>SkyCoach.gg</h1>
          <p className={style.hero__description}>
            Read our SkyCoach.gg review to learn about the WoW, Destiny 2 and
            other video game boosting services they offer. Discussion includes
            boosting service price, customer support and quality of boosters.
          </p>
          <div className={style.flex__group}>
            <ul className={style.card__list}>
              {cardData.map((item) => {
                return (
                  <li key={item.id} className={style.list__item}>
                    <Image
                      src={item.src}
                      width={item.width}
                      height={item.heigth}
                      alt={item.alt}
                    />
                  </li>
                );
              })}
            </ul>
            <div className={style.discount__box}>
              <span className={style.discount__title}>Promocode:</span>
              <ClipboardCopy copyText="5F223GR22M" />
              <span className={style.discount__code}>5F223GR22M</span>
            </div>
          </div>
          <Button className={style.button} type="order">
            Order Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
