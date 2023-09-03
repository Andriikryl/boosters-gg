import React from "react";

import GamePageGroup from "@/components/gamePageGroup/GamePageGroup";
import HeroDota from "./heroBattlefield/HeroBattlefield";

export default function Battlefield() {
  return (
    <>
      <HeroDota />
      <GamePageGroup />
    </>
  );
}
