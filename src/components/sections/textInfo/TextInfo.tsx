import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";

export default function TextInfo() {
  return (
    <section className={style.text}>
      <Container>
        <h3 className={style.text__title}>Maecenas non tortor urna</h3>
        <div>
          <p className={style.text__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            erat purus, vehicula rutrum tincidunt sodales, pharetra ac nibh.
            Praesent facilisis facilisis sapien. Nunc bibendum pulvinar tempor.
            Suspendisse dignissim sollicitudin mauris, quis congue lacus pretium
            et. Mauris suscipit lacus sed hendrerit pellentesque.
          </p>
          <p className={style.text__description}>
            Pellentesque pellentesque eleifend nunc id dapibus. Ut posuere non
            magna imperdiet eleifend. Ut tristique, quam eget interdum lacinia,
            ligula urna bibendum sapien, eget fermentum nibh dolor sed turpis.
            Donec et luctus tellus. Nullam scelerisque hendrerit quam, in
            porttitor risus commodo eu. Etiam tincidunt, lorem vitae gravida
            sagittis, sapien nisi rutrum lorem, porta pretium dui nisl id
            libero.
          </p>
        </div>
      </Container>
    </section>
  );
}
