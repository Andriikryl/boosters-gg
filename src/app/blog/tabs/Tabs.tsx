"use client";
import React from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";
import Link from "next/link";

interface ITabs {
  tabs: string[];
}

export default function Tabs({ tabs }: ITabs) {
  const [focused, setFocused] = React.useState<string | null>(null);
  const [selected, setSelected] = React.useState("");
  return (
    <ul className={style.frapper} onMouseLeave={() => setFocused(null)}>
      {tabs.map((item) => (
        <li
          className={style.tab}
          key={item}
          onClick={() => setSelected(item)}
          onKeyDown={(event: { key: string }) =>
            event.key === "Enter" ? setSelected(item) : null
          }
          onFocus={() => setFocused(item)}
          onMouseEnter={() => setFocused(item)}
          tabIndex={0}
        >
          <Link href={"#"} className={style.item__link}>
            {item}
          </Link>
          {focused === item ? (
            <motion.div
              transition={{
                layout: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              className={style.hover__box}
              layoutId="highlight"
            />
          ) : null}
          {selected === item ? (
            <motion.div
              className={style.border__bottom}
              transition={{
                layout: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              layoutId="underline"
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
