import React from "react";
import HeroAbout from "./heroAbout/HeroAbout";
import HeroInfo from "./heroInfo/HeroInfo";
import Rate from "./rate/Rate";
import TextBlog from "./textBlog/TextBlog";

export default function About() {
  return (
    <>
      <HeroAbout />;
      <HeroInfo />
      <Rate />
      <TextBlog />
    </>
  );
}
