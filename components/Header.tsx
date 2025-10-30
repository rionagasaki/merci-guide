"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed-header">
      <Link href="/" style={{ display: 'block' }}>
        <img
          src="/header.png"
          alt="merci - 友だちと一緒に作業通話できるアプリ！"
          className="header-image"
        />
      </Link>
    </header>
  );
}
