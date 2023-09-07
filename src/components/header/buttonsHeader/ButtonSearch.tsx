import Search from "../../icons/Search";
import styles from "../style.module.css";

interface IButtonSearch {
  onClick: () => void;
}

export default function ButtonSearch({ onClick }: IButtonSearch) {
  return (
    <button
      className={styles.item__search}
      onClick={onClick}
      aria-label="open menu"
      aria-hidden="false"
      data-burger
    >
      <Search />
    </button>
  );
}
