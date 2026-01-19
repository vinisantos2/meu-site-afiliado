"use client";

import Link from "next/link";
import Image from "next/image";
import { NOME_LOJA } from "./data/Constants";

export default function HeaderSite() {
  return (
    <header className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-black/5 top-0 z-50 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={"/"}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row  justify-baseline px-6 py-4 gap-4 transition-all">
            {/* Logo + título */}

            <Image
              src="/imagens/VS-TECH-logo.png"
              alt="Logo do site"
              width={38}
              height={38}
              className="drop-shadow-lg group-hover:scale-105 transition-transform duration-200"
            />
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
              {NOME_LOJA}
            </h1>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {/* <Link href="/guias" className="hover:text-blue-600">
            Guias
          </Link> */}
          <Link href="/topico/notebook" className="hover:text-blue-600">
            Notebooks
          </Link>

          <Link href="/topico/smartphone" className="hover:text-blue-600">
            Smartphones
          </Link>

          <Link href="/topico/smartwatch" className="hover:text-blue-600">
            Smartwatch
          </Link>

          <Link href="/topico/fone-de-ouvido" className="hover:text-blue-600">
            Fones
          </Link>

          <Link href="/cupons" className="hover:text-blue-600">
            Cupons
          </Link>
        </nav>
      </div>
    </header>
  );
}
