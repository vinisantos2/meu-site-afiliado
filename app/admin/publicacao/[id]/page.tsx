"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";
import {
  atualizarPublicacao,
  buscarPublicacaoPorUid,
  criarPublicacao,
} from "@/app/services/PublicacaoService";
import { Publicacao } from "@/app/types/Publicacao";
import FormPublicacao from "../../componentsAdmin/forms/FormPublicacao";

const publicacaoInicial: Publicacao = {
  titulo: "",
  resumo: "",
  slug: "",
  imagem: "",
  tipo: "artigo",
  publicado: false,
  criadoEm: new Date().toISOString(),
  blocos: [],
};

export default function PagePublicacao() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  console.log(id)

  const [publicacao, setPublicacao] = useState<Publicacao | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === "nova") {
      setPublicacao(publicacaoInicial);
      setLoading(false);
    } else {
      carregarPublicacao();
    }
  }, [id]);

  async function carregarPublicacao() {
    setLoading(true);
    const data = await buscarPublicacaoPorUid(id);

    if (!data) {
      alert("Publicação não encontrada");
      router.push("/admin/publicacao");
      return;
    }

    setPublicacao(data);
    setLoading(false);
  }

  async function handleSalvar(data: Publicacao) {
    try {
      console.log(data)
      if (id === "nova") {
        await criarPublicacao(data);
      } else {
        await atualizarPublicacao(id, data);
      }

      router.push("/admin?aba=publicacoes");
    } catch (error) {
      alert("Erro ao salvar publicação");
      console.error(error);
    }
  }

  if (loading || !publicacao) return <Loading />;

  return (
    <section
      className="
  min-h-screen
  bg-gray-50 dark:bg-gray-950
  px-6 py-10
"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div
          className="
      flex flex-col gap-3
      border-b border-gray-200 dark:border-gray-800
      pb-6
    "
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {id === "nova" ? "Nova publicação" : "Editar publicação"}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Preencha os dados principais da publicação. Depois, adicione os
            blocos de conteúdo conforme o padrão do site.
          </p>
        </div>

        {/* Área de edição */}
        <div
          className="
      bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-800
      rounded-2xl
      shadow-lg shadow-black/5 dark:shadow-black/40
      p-6 md:p-8
    "
        >
          <FormPublicacao initialData={publicacao} onSubmit={handleSalvar} />
        </div>
      </div>
    </section>
  );
}
