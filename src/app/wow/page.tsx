import React from "react";
import HeroWow from "./heroWow/HeroWow";
import Info from "@/components/sections/info/Info";
import TopSailling from "../../components/topSailling/TopSailling";

export default function Wow() {
  return (
    <>
      <HeroWow />
      <Info />
      <TopSailling />
    </>
  );
}
