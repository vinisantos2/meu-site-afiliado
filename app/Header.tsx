"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NOME_LOJA } from "./data/Constants";

const MENU_ITEMS = [
  { label: "Notebooks", href: "/topico/notebook" },
  { label: "Smartphones", href: "/topico/smartphone" },
  { label: "Smartwatch", href: "/topico/smartwatch" },
  { label: "Fones", href: "/topico/fone-de-ouvido" },
  { label: "Cupons", href: "/cupons" },
];

export default function HeaderSite() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-black/5 top-0 z-50 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/imagens/VS-TECH-logo.png"
              alt="Logo do site"
              width={38}
              height={38}
              className="drop-shadow-lg"
            />
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">
              {NOME_LOJA}
            </h1>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium bg-white dark:bg-zinc-950">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
