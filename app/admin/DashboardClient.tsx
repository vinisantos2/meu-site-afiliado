"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../components/Loading";
import { auth } from "../lib/firebase";

import AbaAnunciosAmin from "./abas/AbaAnuncios";
import AbaCupons from "./abas/AbaCupons";
import AbaPublicacoes from "./abas/AbaPublicacoes";

import { useAuthRedirectAdmin } from "./hooks/useAuthRedirectAdmin";

type Aba = "anuncios" | "cupons" | "publicacoes";

export default function DashboardClient() {
  const { loading } = useAuthRedirectAdmin();
  const router = useRouter();
  const searchParams = useSearchParams();

  const abaParam = searchParams.get("aba") as Aba | null;

  const [aba, setAba] = useState<Aba>("anuncios");
  const [darkMode, setDarkMode] = useState(false);

  /* ===============================
     Inicializa aba via URL
  =============================== */
  useEffect(() => {
    if (abaParam) {
      setAba(abaParam);
    }
  }, [abaParam]);

  /* ===============================
     Tema Dark
  =============================== */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function trocarAba(novaAba: Aba) {
    setAba(novaAba);
    router.push(`/admin?aba=${novaAba}`);
  }

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 dark:bg-gray-950 text-white flex flex-col py-6 px-4">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        <button
          onClick={() => trocarAba("anuncios")}
          className={`text-left px-4 py-2 rounded mb-2 ${
            aba === "anuncios" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          Anúncios
        </button>

        <button
          onClick={() => trocarAba("cupons")}
          className={`text-left px-4 py-2 rounded mb-2 ${
            aba === "cupons" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          Cupons
        </button>

        <button
          onClick={() => trocarAba("publicacoes")}
          className={`text-left px-4 py-2 rounded mb-2 ${
            aba === "publicacoes" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          Publicações
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-6 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>

        <button
          onClick={() => {
            auth.signOut();
            router.push("/admin/login");
          }}
          className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Sair
        </button>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-8 overflow-auto text-gray-900 dark:text-gray-100">
        {aba === "anuncios" && <AbaAnunciosAmin />}
        {aba === "cupons" && <AbaCupons />}
        {aba === "publicacoes" && <AbaPublicacoes />}
      </main>
    </div>
  );
}
