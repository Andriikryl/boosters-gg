import React from "react";
import HeroWow from "./heroWow/HeroWow";
import Info from "@/components/sections/info/Info";
import TopSailling from "../../components/topSailling/TopSailling";
import Help from "@/components/help/Help";
import Steps from "@/components/steps/Steps";

export default function Wow() {
  return (
    <>
      <HeroWow />
      <Info />
      <TopSailling />
      <Help />
      <Steps />
    </>
  );
}
