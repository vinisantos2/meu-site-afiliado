"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";
import { auth } from "../lib/firebase";
import AbaAnunciosAmin from "./abas/AbaAnuncios";
import AbaAddAnuncio from "./abas/AbaAddAnuncio";
import { useAuthRedirectAdmin } from "./hooks/useAuthRedirectAdmin";
import AbaCupons from "./abas/AbaCupons";
import AbaAddCupon from "./abas/AbaAddCupon";
import AbaPublicacoes from "./abas/AbaPublicacoes";

export default function Dashboard() {
  const { loading } = useAuthRedirectAdmin();
  const router = useRouter();

  const [aba, setAba] = useState<
    | "anúncios"
    | "Adicionar anúncio"
    | "perfil"
    | "Tópicos"
    | "Cupons"
    | "Adicionar Cupons"
    | "Publicações"
  >("anúncios");

  const [darkMode, setDarkMode] = useState(false);

  // Carrega tema salvo
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Atualiza classe do HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 dark:bg-gray-950 text-white flex flex-col py-6 px-4 transition-colors">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        {/* Botão Anúncios */}
        <button
          onClick={() => setAba("anúncios")}
          className={`text-left px-4 py-2 rounded transition mb-2 
          ${aba === "anúncios" ? "bg-gray-700" : "hover:bg-gray-700"}`}
        >
          Anúncios
        </button>

        {/* Botão Adicionar anúncio */}
        <button
          onClick={() => setAba("Adicionar anúncio")}
          className={`text-left px-4 py-2 rounded transition mb-2 
          ${aba === "Adicionar anúncio" ? "bg-gray-700" : "hover:bg-gray-700"}`}
        >
          Adicionar anúncio
        </button>

        {/* Botão Adicionar Cupons */}
        <button
          onClick={() => setAba("Adicionar Cupons")}
          className={`text-left px-4 py-2 rounded transition mb-2 
          ${aba === "Adicionar Cupons" ? "bg-gray-700" : "hover:bg-gray-700"}`}
        >
          Adicionar Cupons
        </button>

        {/* Botão Cupons */}
        <button
          onClick={() => setAba("Cupons")}
          className={`text-left px-4 py-2 rounded transition mb-2 
          ${aba === "Cupons" ? "bg-gray-700" : "hover:bg-gray-700"}`}
        >
          Cupons
        </button>
        {/* Botão publicações */}
        <button
          onClick={() => setAba("Publicações")}
          className={`text-left px-4 py-2 rounded transition mb-2 
          ${aba === "Cupons" ? "bg-gray-700" : "hover:bg-gray-700"}`}
        >
          Publicações
        </button>

        {/* Botão Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-6 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>

        {/* Botão Sair */}
        <button
          onClick={() => {
            auth.signOut();
            router.push("/admin/login");
          }}
          className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white transition"
        >
          Sair
        </button>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8 overflow-auto text-gray-900 dark:text-gray-100 transition-colors">
        {aba === "anúncios" && <AbaAnunciosAmin />}
        {aba === "Adicionar anúncio" && <AbaAddAnuncio />}
        {aba === "Adicionar Cupons" && <AbaAddCupon />}
        {aba === "Cupons" && <AbaCupons />}
        {aba === "Publicações" && <AbaPublicacoes />}
      </main>
    </div>
  );
}
