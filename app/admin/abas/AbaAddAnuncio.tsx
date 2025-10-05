"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Anuncio } from "@/app/types/Anuncio";
import { Topico } from "@/app/types/Topico";
import { buscarTodosTopicos } from "@/app/services/topicoService";
import { salvarAnuncio } from "@/app/services/anuncioService";


export default function AbaAddAnuncio() {
  const [anuncio, setAnuncio] = useState<Anuncio>({
    uid: "",
    nome: "",
    preco: "",
    topico: "",
    link: "",
    imagem: "",
    descricao: "",
    detalhes: "",
    criadoEm: new Date().toISOString(),
  });

  const [topicos, setTopicos] = useState<Topico[]>([]);
  const [carregando, setCarregando] = useState(false);

  // carregar tópicos do Firestore
  useEffect(() => {
    async function fetchTopicos() {
      const dados = await buscarTodosTopicos();
      setTopicos(dados);
    }
    fetchTopicos();
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setAnuncio({ ...anuncio, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await salvarAnuncio(anuncio);
    alert("Anúncio salvo com sucesso!");
    setAnuncio({
      uid: "",
      nome: "",
      preco: "",
      topico: "",
      link: "",
      imagem: "",
      descricao: "",
      detalhes: "",
      
      criadoEm: new Date().toISOString(),
    });
  }

  // 🔍 Função para buscar dados do Mercado Livre
  async function carregarDoMercadoLivre() {
    const idMatch = anuncio.link.match(/MLB\d+/);
    if (!idMatch) return alert("Link inválido");

    try {
      setCarregando(true);
      const resposta = await fetch(`/api/mercadolivre/${idMatch[0]}`);
      if (!resposta.ok) return alert("Erro ao buscar produto");

      const produto = await resposta.json();

      setAnuncio({
        ...anuncio,
        nome: produto.titulo,
        preco: produto.preco,
        imagem: produto.imagem,
        link: produto.link,
        descricao: `${produto.condicao === "new" ? "Novo" : "Usado"} - Vendedor: ${produto.vendedor}`,
      });
    } catch (erro) {
      console.error(erro);
      alert("Erro ao buscar produto no Mercado Livre");
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
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nome do Produto
              </label>
              <Input
                name="nome"
                value={anuncio.nome}
                onChange={handleChange}
                placeholder="Ex: Notebook Gamer"
                required
              />
            </div>

            {/* Preço */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Preço (R$)
              </label>
              <Input
                type="number"
                name="preco"
                value={anuncio.preco}
                onChange={handleChange}
                placeholder="Ex: 4599.90"
                required
              />
            </div>

            {/* Select de Tópicos */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Tópico
              </label>
              <select
                name="topico"
                value={anuncio.topico}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:text-gray-100"
              >
                <option value="">Selecione um tópico</option>
                {topicos.map((topico) => (
                  <option key={topico.uid} value={topico.titulo}>
                    {topico.titulo}
                  </option>
                ))}
              </select>
            </div>

            {/* Link + botão Mercado Livre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Link do Mercado Livre
              </label>
              <div className="flex gap-2">
                <Input
                  name="link"
                  value={anuncio.link}
                  onChange={handleChange}
                  placeholder="https://produto.mercadolivre.com.br/MLB123456789"
                />
                <Button
                  type="button"
                  onClick={carregarDoMercadoLivre}
                  disabled={carregando}
                >
                  {carregando ? "Carregando..." : "Buscar"}
                </Button>
              </div>
            </div>

            {/* Imagem */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                URL da Imagem
              </label>
              <Input
                name="imagem"
                value={anuncio.imagem}
                onChange={handleChange}
                placeholder="https://example.com/imagem.jpg"
                required
              />
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Descrição
              </label>
              <Textarea
                name="descricao"
                value={anuncio.descricao}
                onChange={handleChange}
                placeholder="Descreva o produto..."
                required
              />
            </div>

            {/* Botão */}
            <div className="flex justify-end">
              <Button type="submit" className="px-6 py-2 rounded-xl shadow-md">
                Salvar Anúncio
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
