import React from "react";
import Info from "@/components/sections/info/Info";
import TopSailling from "../../components/topSailling/TopSailling";
import Help from "@/components/help/Help";
import Steps from "@/components/steps/Steps";
import TextInfo from "@/components/sections/textInfo/TextInfo";
import Faq from "@/components/sections/faq/Faq";
import Sales from "@/components/sections/sales/Sales";
import Avatars from "@/components/sections/avatars/Avatars";

export default function GamePageGroup() {
  return (
    <>
      <Info />
      <TopSailling />
      <Help />
      <Steps />
      <TextInfo />
      <Faq />
      <Sales />
      <Avatars />
    </>
  );
}
