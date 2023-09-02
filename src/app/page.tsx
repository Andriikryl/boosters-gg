import Hero from "@/components/sections/hero/Hero";
import Info from "@/components/sections/info/Info";
import Sales from "@/components/sections/sales/Sales";
import Who from "@/components/sections/who/Who";
import Adventeges from "@/components/sections/advanteges/Adventeges";
import Blog from "@/components/sections/blog/Blog";
import TextInfo from "@/components/sections/textInfo/TextInfo";
import Faq from "@/components/sections/faq/Faq";
import Avatars from "@/components/sections/avatars/Avatars";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Sales />
      <Who />
      <Adventeges />
      <Blog />
      <TextInfo />
      <Faq />
      <Avatars />
    </>
  );
}
