"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/header.png"
              alt="merci - 友だちと一緒に作業通話できるアプリ！"
              width={800}
              height={200}
              className="h-auto w-full max-w-2xl"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
