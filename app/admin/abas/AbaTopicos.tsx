"use client";

import { useEffect, useState } from "react";
import { Topico } from "@/app/types/Topico";
import {
  buscarTodosTopicos,
  editarTopico,
  excluirTopico,
  salvarTopico,
} from "@/app/services/topicoService";
import Loading from "@/app/components/Loading";

// 🔹 Lista de ícones disponíveis (nomes que correspondem ao iconMap)
const iconesDisponiveis = [
  "Laptop",
  "Smartphone",
  "Printer",
  "Monitor",
  "Gamepad",
  "Tv",
  "Headphones",
];

export default function AbaTopicos() {
  const [topicos, setTopicos] = useState<Topico[]>([]);
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState<Topico | null>(null);
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novoIcon, setNovoIcon] = useState("");
  const [novaUrl, setNovaUrl] = useState("");

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
      await editarTopico(editando.uid, {
        ...editando,
        titulo: novoTitulo,
        icon: novoIcon,
        url: novaUrl
      });
    } else {
      await salvarTopico({
        titulo: novoTitulo,
        icon: novoIcon,
        url: novaUrl,
        criadoEm: new Date().toISOString(),
      });
    }

    setNovoTitulo("");
    setNovoIcon("");
    setNovaUrl("");
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
    setNovoIcon(topico.icon || "");
    setNovaUrl(topico.url || "");
    setEditando(topico);
  }

  return (
    <section className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        📌 Gerenciar Tópicos
      </h2>

      {/* Formulário */}
      <div className="flex flex-wrap gap-2 mb-6 items-center bg-white dark:bg-gray-800 p-4 rounded shadow-md">
        <input
          type="text"
          placeholder="Título do tópico"
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
          className="flex-1 min-w-[200px] p-2 border border-gray-300 dark:border-gray-700 
                     rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                     placeholder-gray-500 dark:placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Url do tópico"
          value={novaUrl}
          onChange={(e) => setNovaUrl(e.target.value)}
          className="flex-1 min-w-[200px] p-2 border border-gray-300 dark:border-gray-700 
                     rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                     placeholder-gray-500 dark:placeholder-gray-400"
        />

        <select
          value={novoIcon}
          onChange={(e) => setNovoIcon(e.target.value)}
          className="p-2 border border-gray-300 dark:border-gray-700 
                     rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          <option value="">Escolha um ícone</option>
          {iconesDisponiveis.map((nome) => (
            <option key={nome} value={nome}>
              {nome}
            </option>
          ))}
        </select>

        <button
          onClick={handleSalvar}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          {editando ? "Salvar Alteração" : "Adicionar"}
        </button>

        {editando && (
          <button
            onClick={() => {
              setEditando(null);
              setNovoTitulo("");
              setNovoIcon("");
              setNovaUrl("")
              setNovaUrl("");
            }}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transition"
          >
            Cancelar
          </button>
        )}
      </div>

      {/* Lista */}
      {loading ? (
        <p className="text-gray-700 dark:text-gray-300">
          <Loading />
        </p>
      ) : topicos.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Nenhum tópico encontrado.
        </p>
      ) : (
        <ul className="space-y-3">
          {topicos.map((topico) => (
            <li
              key={topico.uid}
              className="flex justify-between items-center p-3 
                         bg-white dark:bg-gray-800 rounded shadow 
                         border border-gray-200 dark:border-gray-700 transition"
            >
              <div>
                <h3 className="font-medium flex items-center gap-2 text-gray-800 dark:text-gray-100">
                  {topico.icon && <span>🧩</span>} {topico.titulo}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ícone: {topico.icon || "—"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Url: {topico.url || "—"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Criado em: {new Date(topico.criadoEm).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEditar(topico)}
                  className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleExcluir(topico.uid)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition"
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
