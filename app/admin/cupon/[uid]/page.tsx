"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Cupon } from "@/app/types/Cupon";
import { buscarCupon, editarCupon } from "@/app/services/CuponService";
import FormCupon from "../../componentsAdmin/FormaCupon";

export default function EditCupon({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const {uid} = use(params);
  const router = useRouter();

  const [cupon, setCupon] = useState<Cupon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnuncio() {
      try {
        const dados = await buscarCupon(uid);
        setCupon(dados);
      } catch (err) {
        console.error("Erro ao buscar anúncio:", err);
        alert("Erro ao carregar o anúncio.");
      } finally {
        setLoading(false);
      }
    }
    fetchAnuncio();
  }, [uid]);

  async function handleSubmit(data: Cupon) {
    try {
      await editarCupon(uid, data);
      alert("✅ cupon atualizado com sucesso!");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      alert("❌ Erro ao salvar cupon.");
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
          ✏️ Editar Cupon
        </h1>

        {/* ✅ agora os dados são carregados corretamente no form */}
        <FormCupon onSubmit={handleSubmit} initialData={cupon} />
      </div>
    </div>
  );
}
