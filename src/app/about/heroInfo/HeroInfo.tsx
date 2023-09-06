import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
const infoData = [
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id vestibulum risus. Ut quis enim nec dui iaculis sollicitudin in nec arcu. Nulla facilisi. Vestibulum pellentesque pellentesque sapien, nec tincidunt dolor efficitur nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  " Sed vitae eros eget dolor ornare efficitur in id nisi. Fusce vitae dui facilisis, congue lorem id, fermentum velit. Quisque fermentum ex vel libero aliquam rhoncus. Phasellus nec odio molestie, facilisis metus et, rhoncus magna. Vestibulum elementum nisi sed eros placerat, sed tempus odio porttitor. Sed ullamcorper maximus rhoncus. Maecenas ultrices vitae nulla ege.",
];

export default function HeroInfo() {
  return (
    <section className={style.info}>
      <Container>
        <div className={style.info__box}>
          {infoData.map((item, index) => {
            return (
              <p className={style.info__text} key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
