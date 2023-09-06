import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
export default function Rate() {
  return (
    <section className={style.rate}>
      <Container>
        <div className={style.rate__box}>
          <h2 className={style.rate__title}>How we Rate</h2>
          <div className={style.flex__group}>
            <div className={style.card__one}>
              <h3 className={style.card__title}>Contrary to popular belief</h3>
              <p className={style.card__Description}>
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source.
              </p>
            </div>
            <div className={style.flex__side}>
              <div className={style.card__two}>
                <h3 className={style.card__title}>Richard McClintock</h3>
                <p className={style.card__Description}>
                  Latin professor at Hampden-Sydney College in Virginia, looked
                  up one of the more obscure Latin words, consectetur.
                </p>
              </div>
              <div className={style.card__two}>
                <h3 className={style.card__title}>Richard McClintock</h3>
                <p className={style.card__Description}>
                  Latin professor at Hampden-Sydney College in Virginia, looked
                  up one of the more obscure Latin words, consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
