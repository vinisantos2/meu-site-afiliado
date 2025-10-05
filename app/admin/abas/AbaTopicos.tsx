"use client";

import { useEffect, useState } from "react";

import { Topico } from "@/app/types/Topico";
import { buscarTodosTopicos, editarTopico, excluirTopico, salvarTopico } from "@/app/services/topicoService";

export default function AbaTopicos() {
  const [topicos, setTopicos] = useState<Topico[]>([]);
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState<Topico | null>(null);
  const [novoTitulo, setNovoTitulo] = useState("");

  // Buscar tópicos no início
  useEffect(() => {
    carregarTopicos();
  }, []);

  async function carregarTopicos() {
    setLoading(true);
    const dados = await buscarTodosTopicos();
    setTopicos(dados);
    setLoading(false);
  }

  async function handleSalvar() {
    if (!novoTitulo.trim()) return;

    if (editando) {
      // Editar existente
      await editarTopico(editando.uid, {
        ...editando,
        titulo: novoTitulo,
      });
    } else {
      // Criar novo
      await salvarTopico({
        uid: "", // será gerado pelo Firestore
        titulo: novoTitulo,
        criadoEm: new Date().toISOString(),
      });
    }

    setNovoTitulo("");
    setEditando(null);
    carregarTopicos();
  }

  async function handleExcluir(id: string) {
    if (confirm("Tem certeza que deseja excluir este tópico?")) {
      await excluirTopico(id);
      carregarTopicos();
    }
  }

  function handleEditar(topico: Topico) {
    setNovoTitulo(topico.titulo);
    setEditando(topico);
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">📌 Gerenciar Tópicos</h2>

      {/* Formulário */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Título do tópico"
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleSalvar}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editando ? "Salvar Alteração" : "Adicionar"}
        </button>
        {editando && (
          <button
            onClick={() => {
              setEditando(null);
              setNovoTitulo("");
            }}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        )}
      </div>

      {/* Lista */}
      {loading ? (
        <p>Carregando tópicos...</p>
      ) : topicos.length === 0 ? (
        <p className="text-gray-500">Nenhum tópico encontrado.</p>
      ) : (
        <ul className="space-y-3">
          {topicos.map((topico) => (
            <li
              key={topico.uid}
              className="flex justify-between items-center p-3 bg-white rounded shadow"
            >
              <div>
                <h3 className="font-medium">{topico.titulo}</h3>
                <p className="text-sm text-gray-500">
                  Criado em: {new Date(topico.criadoEm).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditar(topico)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleExcluir(topico.uid)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
