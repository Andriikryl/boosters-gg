import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import Search from "../icons/Search";

interface ISearchSpace {
  activeSearch: boolean;
  onClick: () => void;
}

export default function SearchSpace({ activeSearch, onClick }: ISearchSpace) {
  return (
    <div
      className={`${style.search__box} ${
        activeSearch ? style.menu_active : ""
      }`}
    >
      <form className={style.form}>
        <div className={style.flex__group}>
          <label className={style.label} htmlFor="site-search">
            Enter your text here
          </label>
          <button className={style.form__button}>
            <Search />
          </button>
        </div>
        <input className={style.input} type="search" id="site-search" />
      </form>
      <button onClick={onClick} className={style.close__search}>
        close
      </button>
    </div>
  );
}
