"use client";
import Image from "next/image";
import NavTopicos from "./NavTopicos";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NavInicial() {
  const [busca, setBusca] = useState("");
  const router = useRouter();

  function handleBuscar() {
    if (busca.trim() !== "") {
      router.push(`/busca/${encodeURIComponent(busca.trim())}`);
      setBusca("");
    }
  }

  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-6 py-10 gap-6">

        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          <Image
            src="/imagens/VS-TECH-logo.png"
            alt="Logo do site"
            width={80}
            height={80}
            className="drop-shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => router.replace("/")}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            VS-Tech <span className="text-yellow-300">Rankings</span>
          </h1>
        </div>

        {/* Subtítulo mais focado */}
        <p className="text-center max-w-2xl text-lg md:text-xl text-gray-100 font-light leading-relaxed">
          Compare, descubra e escolha os melhores produtos
          com análises, reviews e rankings atualizados.
        </p>

        {/* Campo de busca moderno */}
        <div className="mt-2 w-full max-w-xl flex items-center gap-2">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar produtos, gadgets, categorias..."
            className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 shadow-lg outline-none placeholder-gray-500 focus:ring-4 focus:ring-yellow-300 transition-all"
          />
          <button
            onClick={handleBuscar}
            className="px-5 py-3 rounded-xl bg-yellow-300 text-gray-900 font-semibold shadow-lg hover:bg-yellow-400 transition-all"
          >
            Buscar
          </button>
        </div>
      </div>

    
    </header>
  );
}
