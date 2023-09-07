import React from "react";
import style from "./style.module.css";

const marquueData = [
  {
    id: 1,
    title: "WoW Boosting",
  },
  {
    id: 2,
    title: "LOL Boosting",
  },
  {
    id: 3,
    title: "Diablo 4 Boosting",
  },
  {
    id: 4,
    title: "WoW Boosting",
  },
  {
    id: 5,
    title: "LOL Boosting",
  },
  {
    id: 6,
    title: "Diablo 4 Boosting",
  },
];

export default function Marquue() {
  return (
    <ul className={style.list}>
      {marquueData.map((item) => {
        return (
          <li className={style.list__item} key={item.id}>
            <h3 className={style.item__title}>{item.title}</h3>
          </li>
        );
      })}
    </ul>
  );
}
