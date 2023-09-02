import { ReactNode } from "react";
import style from "./style.module.css";

export type FAQ = { question: string; answer: ReactNode };

export const defaultFAQs: FAQ[] = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat purus?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Different games come with different boosting processes. However, the
          primary idea is to hire a professional player to help ramp up your
          rankings although every company has its process. But this is how it
          works. Once you purchase a boost, your boosting order is generated in
          our system, assigned to a professional player to complete it, and
          delivered once ready. The two major boosting options include regular
          and duo boosting. Regular LoL Elo boosting service entails the player
          delegating the entire gameplay to the booster whereas duo boosting
          means the player combines forces with the professional booster.
        </p>
      </div>
    ),
  },
  {
    question: "There are many variations of passages?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Different games come with different boosting processes. However, the
          primary idea is to hire a professional player to help ramp up your
          rankings although every company has its process. But this is how it
          works. Once you purchase a boost, your boosting order is generated in
          our system, assigned to a professional player to complete it, and
          delivered once ready. The two major boosting options include regular
          and duo boosting. Regular LoL Elo boosting service entails the player
          delegating the entire gameplay to the booster whereas duo boosting
          means the player combines forces with the professional booster.
        </p>
      </div>
    ),
  },
  {
    question: "How do you make holy water?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Different games come with different boosting processes. However, the
          primary idea is to hire a professional player to help ramp up your
          rankings although every company has its process. But this is how it
          works. Once you purchase a boost, your boosting order is generated in
          our system, assigned to a professional player to complete it, and
          delivered once ready. The two major boosting options include regular
          and duo boosting. Regular LoL Elo boosting service entails the player
          delegating the entire gameplay to the booster whereas duo boosting
          means the player combines forces with the professional booster.
        </p>
      </div>
    ),
  },
];
