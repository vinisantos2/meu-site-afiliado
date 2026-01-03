"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";
import { Cupon } from "@/app/types/Cupon";
import {
  buscarCupon,
  salvarCupon,
  editarCupon,
} from "@/app/services/CuponService";
import FormCupon from "../../componentsAdmin/FormaCupon";

export default function PageCupon({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = use(params);
  const router = useRouter();

  const isNovo = uid === "novo";

  const [cupon, setCupon] = useState<Cupon | null>(null);
  const [loading, setLoading] = useState(true);

  /* ===============================
     CARREGAR (somente se editar)
  =============================== */
  useEffect(() => {
    if (isNovo) {
      setCupon(null);
      setLoading(false);
      return;
    }

    async function fetchCupon() {
      try {
        const dados = await buscarCupon(uid);
        setCupon(dados);
      } catch (err) {
        console.error("Erro ao buscar cupom:", err);
        alert("Erro ao carregar o cupom.");
      } finally {
        setLoading(false);
      }
    }

    fetchCupon();
  }, [uid, isNovo]);

  /* ===============================
     SUBMIT (criar ou editar)
  =============================== */
  async function handleSubmit(data: Cupon) {
    try {
      if (isNovo) {
        await salvarCupon(data);
        alert("✅ Cupom criado com sucesso!");
      } else {
        await editarCupon(uid, data);
        alert("✅ Cupom atualizado com sucesso!");
      }

      router.push("/admin?aba=cupons");
    } catch (err) {
      console.error(err);
      alert("❌ Erro ao salvar cupom.");
    }
  }

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          {isNovo ? "➕ Novo Cupom" : "✏️ Editar Cupom"}
        </h1>

        <FormCupon
          initialData={isNovo ? null : cupon}
          onSubmit={handleSubmit}
        />

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Última atualização automática após salvar ✅
        </div>
      </div>
    </div>
  );
}
