import styles from "../style.module.css";

interface IBurgerButton {
  onClick: () => void;
  activeState: boolean;
}

export default function BurgerSideBar({ onClick, activeState }: IBurgerButton) {
  return (
    <button
      onClick={onClick}
      className={`${styles.burger} ${activeState ? styles.burger__active : ""}`}
      aria-label="open menu"
      aria-hidden="false"
      data-burger
    >
      <span className={styles.burger__line}></span>
    </button>
  );
}
