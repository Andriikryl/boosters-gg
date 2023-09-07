import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import ContactGroup from "./contactGroup/ContactGroup";
import LegalGroup from "./legalGroup/LegalGroup";
import NavigationLinks from "./navigationLinks/NavigationLinks";
import BackToTopBtn from "../backToTopBtn/BackToTopBtn";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footer__box}>
          <ContactGroup />
          <LegalGroup />
          <NavigationLinks />
          <BackToTopBtn />
        </div>
      </Container>
    </footer>
  );
}
