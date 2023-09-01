import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import Image from "next/image";
import { Button } from "@/components/button/Button";

const dataText = [
  {
    id: 1,
    paragraphOne:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    paragraphTwo:
      "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    paragraphThree:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    paragraphFour:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    src: "/who/who.png",
    width: 314,
    hegth: 627,
    alt: "",
  },
];

export default function Who() {
  return (
    <section className={style.who}>
      <Container>
        <h3 className={style.who__title}>Who are we?</h3>
        {dataText.map((item) => {
          return (
            <div className={style.who__box} key={item.id}>
              <div className={style.flex__group}>
                <p className={style.text}>{item.paragraphOne}</p>
                <p className={style.text}>{item.paragraphTwo}</p>
              </div>
              <div className={style.image__box}>
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.hegth}
                  alt={item.alt}
                />
              </div>
              <div className={style.flex__group}>
                <p className={style.text}>{item.paragraphThree}</p>
                <p className={style.text}>{item.paragraphFour}</p>
              </div>
            </div>
          );
        })}
        <Button className={style.button} type="button__bust">
          Boosting now
        </Button>
      </Container>
    </section>
  );
}
