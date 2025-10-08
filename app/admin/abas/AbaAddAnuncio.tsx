"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Anuncio } from "@/app/types/Anuncio";
import { Topico } from "@/app/types/Topico";
import { buscarTodosTopicos } from "@/app/services/topicoService";
import { salvarAnuncio } from "@/app/services/anuncioService";
import FormAnuncio from "../componentsAdmin/FormAnuncio";

export default function AbaAddAnuncio() {
  const [topicos, setTopicos] = useState<Topico[]>([]);
  const [carregando, setCarregando] = useState(false);

  // Carregar tópicos do Firestore
  useEffect(() => {
    async function fetchTopicos() {
      const dados = await buscarTodosTopicos();
      setTopicos(dados);
    }
    fetchTopicos();
  }, []);

  async function handleSubmit(data: Anuncio) {
    try {
      setCarregando(true);

      // Gera UID e data de criação se for novo
      const anuncioParaSalvar: Anuncio = {
        ...data,
        uid: data.uid || crypto.randomUUID(),
        criadoEm: data.criadoEm || new Date().toISOString(),
      };

      await salvarAnuncio(anuncioParaSalvar);
      alert("✅ Anúncio salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar anúncio:", error);
      alert("❌ Ocorreu um erro ao salvar o anúncio.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <section className="p-6 flex justify-center">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl border border-gray-200 bg-white dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Adicionar Novo Anúncio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormAnuncio onSubmit={handleSubmit} />
          {carregando && (
            <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
              Salvando anúncio...
            </p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
