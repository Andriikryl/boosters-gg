import { Container } from "@/components/container/Container";
import React from "react";
import Tabs from "../tabs/Tabs";
import style from "./style.module.css";
import BlogCard from "@/components/blogCard/BlogCard";
import { Button } from "@/components/button/Button";

const tabs = ["All", "Guides", "News"];
const blogData = [
  {
    id: 1,
    date: "10.03",
    title: "Content here, content here",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
  },
  {
    id: 2,
    date: "04.03",
    title: "Content here, content here",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
  },
  {
    id: 3,
    date: "29.02",
    title: "Content here, content here",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
  },
  {
    id: 4,
    date: "10.03",
    title: "Content here, content here",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
  },
  {
    id: 5,
    date: "04.03",
    title: "Content here, content here",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
  },
  {
    id: 6,
    date: "29.02",
    title: "Content here, content here",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
  },
  {
    id: 7,
    date: "10.03",
    title: "Content here, content here",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
  },
  {
    id: 8,
    date: "04.03",
    title: "Content here, content here",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
  },
  {
    id: 9,
    date: "29.02",
    title: "Content here, content here",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
  },
];

export default function CardBox() {
  return (
    <div className={style.card__box}>
      <Container>
        <div className={style.tabs__container}>
          <Tabs tabs={tabs} />
        </div>
        <ul className={style.blog__list}>
          {blogData.map((item) => {
            return <BlogCard key={item.id} item={item} />;
          })}
        </ul>
        <Button className={style.button} type="button__bust">
          Show more
        </Button>
      </Container>
    </div>
  );
}
