"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
        <Link href="/" className="block">
          <div className="relative w-full max-w-3xl" style={{ height: '60px' }}>
            <Image
              src="/header.png"
              alt="merci - 友だちと一緒に作業通話できるアプリ！"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              priority
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
