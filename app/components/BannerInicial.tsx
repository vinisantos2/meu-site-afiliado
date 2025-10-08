"use client";
import Image from "next/image";
import NavTopicos from "./NavTopicos";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BannerInicial() {
  const [busca, setBusca] = useState("");
  const router = useRouter();

  function handleBuscar() {
    if (busca.trim() !== "") {
      router.push(`/busca/${encodeURIComponent(busca.trim())}`);
      setBusca("");
    }
  }

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-8 gap-8">
        {/* Logo + título */}
        <div className="flex items-center gap-3">
          <Image
            src="/imagens/VS-TECH-logo.png"
            alt="Logo do site"
            width={80}
            height={80}
            className="drop-shadow-lg cursor-pointer hover:scale-105 transition-transform"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            VS-Tech <span className="text-yellow-300">Ofertas</span>
          </h1>
        </div>

        {/* Campo de busca moderno */}
        <div className="relative w-full md:w-[450px]">
          {/* Fundo com transparência e blur */}
          <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-full shadow-md flex items-center transition-all focus-within:border-yellow-300">
            <Search
              size={20}
              className="ml-4 text-white/80 group-focus-within:text-yellow-300 transition-colors"
            />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar produtos, marcas..."
              className="flex-1 bg-transparent placeholder-white/70 text-white px-3 py-3 focus:outline-none"
            />

            <button
              onClick={handleBuscar}
              className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold shadow-lg transition-all active:scale-95"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>

      {/* Navegação de tópicos */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-opacity-30">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <NavTopicos />
        </div>
      </nav>
    </header>
  );
}
