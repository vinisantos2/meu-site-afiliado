"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  buscarAnuncio,
  editarAnuncio,
  salvarAnuncio,
} from "@/app/services/anuncioService";
import FormAnuncio from "../../componentsAdmin/forms/FormAnuncio";
import { Anuncio } from "@/app/types/AnuncioBase";
import Loading from "@/app/components/Loading";
import ImgCard from "@/app/components/ImgCard";

export default function PageAnuncio({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = use(params);

  const router = useRouter();

  const isNovo = uid === "novo";

  const [anuncio, setAnuncio] = useState<Anuncio | null>(null);
  const [loading, setLoading] = useState(true);

  /* ===============================
     CARREGAR (somente se editar)
  =============================== */
  useEffect(() => {
    if (isNovo) {
      setAnuncio(null);
      setLoading(false);
      return;
    }

    async function fetchAnuncio() {
      try {
        const dados = await buscarAnuncio(uid);
        console.log(uid);
        setAnuncio(dados);
      } catch (err) {
        console.error("Erro ao buscar anúncio:", err);
        alert("Erro ao carregar o anúncio.");
      } finally {
        setLoading(false);
      }
    }

    fetchAnuncio();
  }, [uid, isNovo]);

  /* ===============================
     SUBMIT (criar ou editar)
  =============================== */
  async function handleSubmit(data: Anuncio) {
    try {
      if (isNovo) {
        await salvarAnuncio(data);
        alert("✅ Anúncio criado com sucesso!");
      } else {
        await editarAnuncio(uid, data);
        alert("✅ Anúncio atualizado com sucesso!");
      }

      router.push("/admin?aba=anuncios");
    } catch (err) {
      console.error(err);
      alert("❌ Erro ao salvar anúncio.");
    }
  }

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-4 text-center">
          {isNovo ? "➕ Novo Anúncio" : "✏️ Editar Anúncio"}
        </h1>
        {/* Imagem do anuncio */}
        {anuncio?.imagens?.[0] && (
          <ImgCard nome={anuncio.nome} img={anuncio.imagens[0]} />
        )}

        <FormAnuncio
          initialData={isNovo ? null : anuncio}
          onSubmit={handleSubmit}
        />

        <div className="mt-8 text-center text-sm text-gray-500">
          Última atualização automática após salvar ✅
        </div>
      </div>
    </div>
  );
}
