import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";
import AvatarCard from "@/components/avatarCard/AvatarCard";

const avatarsData = [
  {
    id: 1,
    name: "Arthur Bort",
    links: ["Online story", "safe game", "Online story"],
    socials: [
      {
        id: 1,
        src: "/icons/linkedin-svgrepo-com 1.svg",
        width: 19,
        heigth: 19,
        alt: "likedin",
      },
      {
        id: 2,
        src: "/icons/twitter-154-svgrepo-com 1.svg",
        width: 19,
        heigth: 19,
        alt: "twitter",
      },
      {
        id: 3,
        src: "/icons/instagram-svgrepo-com (4) 1.svg",
        width: 19,
        heigth: 19,
        alt: "instagram",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit, elit eu pharetra molestie, ex ex rutrum eros, ac tempus urna justo vitae tellus. Morbi euismod bibendum odio, ac suscipit arcu fermentum consequat. Aliquam erat volutpat. Integer id risus lacus. Nam a tellus quis orci efficitur tempus. Pellentesque vitae volutpat turpis, ut semper.",
    avatarSrc: "/icons/avatar.png",
    avatarWidth: 170,
    avatarHeigth: 170,
    avatarAlt: "",
  },
  {
    id: 2,
    name: "Arthur Bort",
    links: ["Online story", "safe game", "Online story"],
    socials: [
      {
        id: 1,
        src: "/icons/linkedin-svgrepo-com 1.svg",
        width: 19,
        heigth: 19,
        alt: "likedin",
      },
      {
        id: 2,
        src: "/icons/twitter-154-svgrepo-com 1.svg",
        width: 19,
        heigth: 19,
        alt: "twitter",
      },
      {
        id: 3,
        src: "/icons/instagram-svgrepo-com (4) 1.svg",
        width: 19,
        heigth: 19,
        alt: "instagram",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit, elit eu pharetra molestie, ex ex rutrum eros, ac tempus urna justo vitae tellus. Morbi euismod bibendum odio, ac suscipit arcu fermentum consequat. Aliquam erat volutpat. Integer id risus lacus. Nam a tellus quis orci efficitur tempus. Pellentesque vitae volutpat turpis, ut semper.",
    avatarSrc: "/icons/avatar.png",
    avatarWidth: 170,
    avatarHeigth: 170,
    avatarAlt: "",
  },
  {
    id: 3,
    name: "Arthur Bort",
    links: ["Online story", "safe game", "Online story"],
    socials: [
      {
        id: 1,
        src: "/icons/linkedin-svgrepo-com 1.svg",
        width: 19,
        heigth: 19,
        alt: "likedin",
      },
      {
        id: 2,
        src: "/icons/twitter-154-svgrepo-com 1.svg",
        width: 19,
        heigth: 19,
        alt: "twitter",
      },
      {
        id: 3,
        src: "/icons/instagram-svgrepo-com (4) 1.svg",
        width: 19,
        heigth: 19,
        alt: "instagram",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit, elit eu pharetra molestie, ex ex rutrum eros, ac tempus urna justo vitae tellus. Morbi euismod bibendum odio, ac suscipit arcu fermentum consequat. Aliquam erat volutpat. Integer id risus lacus. Nam a tellus quis orci efficitur tempus. Pellentesque vitae volutpat turpis, ut semper.",
    avatarSrc: "/icons/avatar.png",
    avatarWidth: 170,
    avatarHeigth: 170,
    avatarAlt: "",
  },
];

export default function Avatars() {
  return (
    <section className={style.avatars}>
      <Container>
        <h3 className={style.avatars__title}>Avatars</h3>
        <ul className={style.list}>
          {avatarsData.map((item) => {
            return <AvatarCard key={item.id} item={item} />;
          })}
        </ul>
      </Container>
    </section>
  );
}
