"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
        <Link href="/" className="block w-full">
          <div className="relative w-full" style={{ aspectRatio: '4 / 1' }}>
            <Image
              src="/header.png"
              alt="merci - 友だちと一緒に作業通話できるアプリ！"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
