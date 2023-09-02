import React from "react";
import { Container } from "@/components/container/Container";
import { defaultFAQs } from "./defaultValues";
import Accordion from "../../Accordion/Accordion";
import style from "./style.module.css";
export default function Faq() {
  return (
    <section className={style.faq}>
      <Container>
        <h3 className={style.faq__title}>FAQ</h3>
        <div className={style.faq__box}>
          {defaultFAQs.map((faq, i) => (
            <Accordion key={i} title={faq.question} body={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
