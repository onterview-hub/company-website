"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/education", label: "교육서비스", key: "education" },
  { href: "/video", label: "영상제작서비스", key: "video" },
  { href: "/reference", label: "레퍼런스", key: "reference" },
  { href: "/about", label: "회사소개", key: "about" },
  { href: "/contact", label: "문의하기", key: "contact" },
];

export default function Header({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-widest"
          onClick={() => setOpen(false)}
        >
          SKETCH<span className="text-amber-400">ON</span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex gap-8 text-sm text-white/80">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={
                l.key === active
                  ? "text-amber-400"
                  : "hover:text-amber-400 transition"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="메뉴 열기"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <nav className="md:hidden flex flex-col bg-black border-t border-white/10 px-6 py-4 gap-1">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              className={
                "py-3 border-b border-white/5 last:border-0 " +
                (l.key === active
                  ? "text-amber-400"
                  : "text-white/80 hover:text-amber-400 transition")
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}