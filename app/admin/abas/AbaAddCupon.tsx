"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormCupon from "../componentsAdmin/FormaCupon";
import { Cupon } from "@/app/types/Cupon";
import { salvarCupon } from "@/app/services/CuponService";

export default function AbaAddCupon() {
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(data: Cupon) {
    try {
      setCarregando(true);

      const cuponParaSalvar: Cupon = {
        ...data,
        criadoEm: data.criadoEm || new Date().toISOString(),
      };

      await salvarCupon(cuponParaSalvar);
      alert("✅ Cupon salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar Cupon:", error);
      alert("❌ Ocorreu um erro ao salvar o Cupon.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <section className="p-6 flex justify-center">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl border border-gray-200 bg-white dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Adicionar Novo Cupon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormCupon onSubmit={handleSubmit} />
          {carregando && (
            <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
              Salvando Cupon...
            </p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
