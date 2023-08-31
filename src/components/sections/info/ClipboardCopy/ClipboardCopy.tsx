"use client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import style from "./style.module.css";

interface ICopytext {
  copyText: string;
}

export default function ClipboardCopy({ copyText }: ICopytext) {
  return (
    <div>
      <CopyToClipboard text={copyText}>
        <button className={style.buuton}>
          <Image src="/card/copy.svg" width={22} height={22} alt="copy text" />
        </button>
      </CopyToClipboard>
    </div>
  );
}
