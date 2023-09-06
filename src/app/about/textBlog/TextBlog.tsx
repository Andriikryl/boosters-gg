import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import ImageText from "public/textBlog/image 52.png";
import Image from "next/image";
const textData = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id vestibulum risus. Ut quis enim nec dui iaculis sollicitudin in nec arcu. Nulla facilisi. Vestibulum pellentesque pellentesque sapien, nec tincidunt dolor efficitur nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  " Sed vitae eros eget dolor ornare efficitur in id nisi. Fusce vitae dui facilisis, congue lorem id, fermentum velit. Quisque fermentum ex vel libero aliquam rhoncus. Phasellus nec odio molestie, facilisis metus et, rhoncus magna. Vestibulum elementum nisi sed eros placerat, sed tempus odio porttitor. Sed ullamcorper maximus rhoncus. Maecenas ultrices vitae nulla ege.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id vestibulum risus. Ut quis enim nec dui iaculis sollicitudin in nec arcu. Nulla facilisi. Vestibulum pellentesque pellentesque sapien, nec tincidunt dolor efficitur nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
];

export default function TextBlog() {
  return (
    <div className={style.text}>
      <Container>
        <div className={style.text__box}>
          <Image src={ImageText} width={741} height={741} alt="image" />
          <div>
            <h3 className={style.text__title}>Lorem ipsum dolor sit amet</h3>
            <div className={style.description__box}>
              {textData.map((text, index) => {
                return (
                  <p className={style.text__description} key={index}>
                    {text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
