import React from "react";
import GamesHero from "./gamesHero/GamesHero";
import GamesList from "./gamesList/GamesList";
import Faq from "@/components/sections/faq/Faq";
import Avatars from "@/components/sections/avatars/Avatars";

export default function Games() {
  return (
    <>
      <GamesHero />
      <GamesList />
      <Faq />
      <Avatars />
    </>
  );
}
