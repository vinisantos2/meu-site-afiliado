"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnuncioBase } from "@/app/types/AnuncioBase";
import { buscarAnuncio, editarAnuncio } from "@/app/services/anuncioService";
import FormAnuncio from "../../componentsAdmin/forms/FormAnuncio";

type PageProps = {
  params: {
    uid: string;
  };
};

export default function EditAnuncio({ params }: PageProps) {
  const uid = params.uid;
  const router = useRouter();

  const [anuncio, setAnuncio] = useState<AnuncioBase | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnuncio() {
      try {
        const dados = await buscarAnuncio(uid);
        setAnuncio(dados);
      } catch (err) {
        console.error("Erro ao buscar anúncio:", err);
        alert("Erro ao carregar o anúncio.");
      } finally {
        setLoading(false);
      }
    }
    fetchAnuncio();
  }, [uid]);

  async function handleSubmit(data: AnuncioBase) {
    try {
      await editarAnuncio(uid, data);
      alert("✅ Anúncio atualizado com sucesso!");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      alert("❌ Erro ao salvar anúncio.");
    }
  }

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-700 dark:text-gray-300">
        Carregando...
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10 transition-all duration-300">
        {/* Título */}
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">
          ✏️ Editar Anúncio
        </h1>

        {/* Preço */}
        {anuncio?.valor && (
          <p className="text-center text-xl font-semibold text-green-600 dark:text-green-400 mb-6">
            💰 R$ {Number(anuncio.valor).toFixed(2)}
          </p>
        )}

        {/* Imagem de destaque */}
        {anuncio?.imagens && anuncio.imagens.length > 0 && (
          <div className="mb-8 flex justify-center">
            <img
              src={anuncio.imagens[0]}
              alt="Imagem do anúncio"
              className="w-72 h-72 object-cover rounded-xl border border-gray-300 dark:border-gray-700 shadow-md hover:scale-105 transition-transform"
            />
          </div>
        )}

        {/* Formulário */}
        <FormAnuncio onSubmit={handleSubmit} initialData={anuncio} />

        {/* Rodapé */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Última atualização automática após salvar ✅
        </div>
      </div>
    </div>
  );
}
