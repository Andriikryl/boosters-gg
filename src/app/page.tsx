import Hero from "@/components/sections/hero/Hero";
import styles from "./page.module.css";
import Info from "@/components/sections/info/Info";
import Sales from "@/components/sections/sales/Sales";
import Who from "@/components/sections/who/Who";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Sales />
      <Who />
    </>
  );
}
