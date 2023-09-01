import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import BlogCard from "@/components/blogCard/BlogCard";
import { Button } from "@/components/button/Button";

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
];

export default function Blog() {
  return (
    <section className={style.blog}>
      <Container>
        <h3 className={style.blog__title}>Blog</h3>
        <ul className={style.blog__list}>
          {blogData.map((item) => {
            return <BlogCard key={item.id} item={item} />;
          })}
        </ul>
        <Button type="button__bust" className={style.button}>
          all blogs
        </Button>
      </Container>
    </section>
  );
}
