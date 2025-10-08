"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";
import { auth } from "../lib/firebase";
import AbaAnunciosAmin from "./abas/AbaAnuncios";
import AbaAddAnuncio from "./abas/AbaAddAnuncio";
import { useAuthRedirectAdmin } from "./hooks/useAuthRedirectAdmin";
import AbaTopicos from "./abas/AbaTopicos";

export default function Dashboard() {
  const { loading } = useAuthRedirectAdmin();
  const router = useRouter();
  const [aba, setAba] = useState<
    "anúncios" | "Adicionar anúncio" | "perfil" | "Tópicos"| "Cupons"
  >("anúncios");

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col py-6 px-4">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        {/* Botão Anúncios */}
        <button
          onClick={() => setAba("anúncios")}
          className={`text-left px-4 py-2 rounded hover:bg-gray-700 transition ${
            aba === "anúncios" ? "bg-gray-700" : ""
          } mb-2`}
        >
          Anúncios
        </button>

        {/* Botão Adicionar anúncio */}
        <button
          onClick={() => setAba("Adicionar anúncio")}
          className={`text-left px-4 py-2 rounded hover:bg-gray-700 transition ${
            aba === "Adicionar anúncio" ? "bg-gray-700" : ""
          } mb-2`}
        >
          Adicionar anúncio
        </button>

        {/* Botão topico */}
        <button
          onClick={() => setAba("Tópicos")}
          className={`text-left px-4 py-2 rounded hover:bg-gray-700 transition ${
            aba === "Tópicos" ? "bg-gray-700" : ""
          } mb-2`}
        >
          Tópicos
        </button>

        {/* Botão Perfil */}
        <button
          onClick={() => setAba("perfil")}
          className={`text-left px-4 py-2 rounded hover:bg-gray-700 transition ${
            aba === "perfil" ? "bg-gray-700" : ""
          } mb-2`}
        >
          Perfil
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
      <main className="flex-1 p-8 overflow-auto">
        {aba === "anúncios" && <AbaAnunciosAmin />}
        {aba === "Adicionar anúncio" && <AbaAddAnuncio />}
        {aba === "Tópicos" && <AbaTopicos />}
        {aba === "Cupons" && <AbaTopicos />}
        {/* Adicione o componente para a aba de Perfil aqui, se houver: */}
        {/* {aba === "perfil" && <AbaPerfilAdmin />} */}
      </main>
    </div>
  );
}
