import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
          tempora voluptatum quod, vitae facilis vero debitis voluptatem itaque
          accusamus ea similique totam molestiae ab, sed commodi? Culpa repellat
          numquam blanditiis.
        </div>
      </Container>
    </section>
  );
}
