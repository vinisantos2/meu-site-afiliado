"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CampoBusca() {
  const [busca, setBusca] = useState("");
  const router = useRouter();

  const handleBuscar = () => {
    if (!busca.trim()) return; // impede busca vazia
    router.push(`/busca/${encodeURIComponent(busca.trim())}`); // rota sempre a partir da raiz
  };

  return (
    <div className="relative w-full md:w-[450px]">
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
          onKeyDown={(e) => e.key === "Enter" && handleBuscar()} // permite Enter também
        />

        <button
          disabled={!busca.trim()} // desativa se vazio
          onClick={handleBuscar}
          className={`absolute cursor-pointer right-1.5 top-1.5 bottom-1.5 px-5 rounded-full font-semibold shadow-lg transition-all active:scale-95
            ${busca.trim()
              ? "bg-yellow-400 hover:bg-yellow-500 text-indigo-900"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
