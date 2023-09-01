import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import ClipboardCopy from "../ClipboardCopy/ClipboardCopy";
import { Button } from "../button/Button";
import { CircleProgressBar } from "../CircleProgressBar/CircleProgressBar";

interface ICardInfo {
  progressPercents: number;
  PROGRESS_STROKE_WIDTH: number;
  item: {
    id: number;
    MainImg: string;
    width: number;
    heigth: number;
    alt: string;
    cards: {
      id: string;
      src: string;
      width: number;
      heigth: number;
      alt: string;
    }[];
    raiteTitle: string;
    discount: number;
    promocode: string;
    readBtn: string;
    orderBtn: string;
    progress: string;
  };
}

export default function CardInfo({
  item,
  progressPercents,
  PROGRESS_STROKE_WIDTH,
}: ICardInfo) {
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
          <span className={style.progress__number}>{item.progress}</span>
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
      <span className={style.item__discount}>{item.discount}% Discount</span>
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
}
