"use client";
import Image from "next/image";
import NavTopicos from "./NavTopicos";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CampoBusca from "./CampoBusca";

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
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-8 gap-8">
        {/* Logo + título */}
        <div className="flex items-center gap-3">
          <Image
            src="/imagens/VS-TECH-logo.png"
            alt="Logo do site"
            width={80}
            height={80}
            className="drop-shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => router.replace("/")}
          />
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            VS-Tech <span className="text-yellow-300">Ofertas</span>
          </h1>
        </div>

        <div className="max-w-xl mx-auto mt-4 px-4">
          <p className="text-center text-lg md:text-xl font-light leading-relaxed text-gray-100 bg-clip-text">
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent font-semibold">
              VS-Tech Ofertas
            </span>{" "}
            é o seu espaço para descobrir as melhores promoções, novidades e
            dicas sobre tecnologia.
            <br /> tudo em um só lugar para você economizar e ficar por dentro
            das tendências.
          </p>
        </div>

        {/* Campo de busca moderno */}

        {/* <CampoBusca /> */}
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
