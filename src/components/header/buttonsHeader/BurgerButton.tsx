import Image from "next/image";
import styles from "../style.module.css";
import Burger from "public/icons/burger.svg";

interface IBurgerButton {
  onClick: () => void;
  activeState: boolean;
}

export default function BurgerButton({ onClick, activeState }: IBurgerButton) {
  return (
    <button
      onClick={onClick}
      className={styles.burger__menu}
      aria-label="open menu"
      aria-hidden="false"
      data-burger
    >
      <Image src={Burger} width={34} height={34} alt="Burger button" />
    </button>
  );
}
