import Hero from "@/components/sections/hero/Hero";
import Info from "@/components/sections/info/Info";
import Sales from "@/components/sections/sales/Sales";
import Who from "@/components/sections/who/Who";
import Adventeges from "@/components/sections/advanteges/Adventeges";
import Blog from "@/components/sections/blog/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Sales />
      <Who />
      <Adventeges />
      <Blog />
    </>
  );
}
