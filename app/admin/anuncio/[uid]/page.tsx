"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Anuncio } from "@/app/types/Anuncio";
import { buscarAnuncio, editarAnuncio } from "@/app/services/anuncioService";
import FormAnuncio from "../../componentsAdmin/FormAnuncio";

type PageProps = {
  params: {
    uid: string;
  };
};

export default function EditAnuncio({ params }: PageProps) {
  const { uid } = params;
  const router = useRouter();

  const [anuncio, setAnuncio] = useState<Anuncio | null>(null);
  const [loading, setLoading] = useState(true);

  // Buscar anúncio pelo UID
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

  async function handleSubmit(data: Anuncio) {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 transition-all duration-300">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          ✏️ Editar Anúncio
        </h1>

        {anuncio?.imagens && anuncio.imagens.length > 0 && (
          <div className="mb-6 flex justify-center">
            <img
              src={anuncio.imagens[0]}
              alt="Imagem do anúncio"
              className="w-64 h-64 object-cover rounded-lg border shadow-md dark:border-gray-700"
            />
          </div>
        )}

        {/* Formulário reutilizável */}
        <FormAnuncio onSubmit={handleSubmit} initialData={anuncio} />
      </div>
    </div>
  );
}
