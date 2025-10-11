"use client";

import { useEffect, useState } from "react";
import { CuponComId, Cupon } from "@/app/types/Cupon";
import {
  buscarTodosCupons,
  salvarCupon,
  editarCupon,
  excluirCupon,
} from "@/app/services/CuponService";
import { Sun, Moon, Edit, Trash2, Save, Plus } from "lucide-react";

export default function AbaCupons() {
  const [cupons, setCupons] = useState<CuponComId[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [form, setForm] = useState<Cupon>({
    nome: "",
    descricao: "",
    codigo: "",
    desconto: 0,
    tipoDesconto: "percentual",
    link: "",
    criadoEm: new Date().toISOString(),
    validade: "",
    ativo: true,
    detalhes: "",
    destaque: false,
  });
  const [editandoId, setEditandoId] = useState<string | null>(null);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const data = await buscarTodosCupons();
    setCupons(data);
  }

  async function salvarOuEditar() {
    if (editandoId) {
      await editarCupon(editandoId, form);
    } else {
      await salvarCupon(form);
    }
    resetarForm();
    carregar();
  }

  function resetarForm() {
    setForm({
      nome: "",
      descricao: "",
      codigo: "",
      desconto: 0,
      tipoDesconto: "percentual",
      link: "",
      criadoEm: new Date().toISOString(),
      validade: "",
      ativo: true,
      detalhes: "",
      destaque: false,
    });
    setEditandoId(null);
  }

  function editar(c: CuponComId) {
    setForm(c);
    setEditandoId(c.uid);
  }

  async function excluir(id: string) {
    if (confirm("Tem certeza que deseja excluir este cupom?")) {
      await excluirCupon(id);
      carregar();
    }
  }

  return (
    <div className={`${darkMode ? "dark" : ""} transition`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Cabeçalho */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">🎟️ Gerenciar Cupons</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Formulário */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
              />
              <input
                type="text"
                placeholder="Código"
                value={form.codigo}
                onChange={(e) => setForm({ ...form, codigo: e.target.value })}
                className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
              />
              <input
                type="number"
                placeholder="Desconto"
                value={form.desconto}
                onChange={(e) =>
                  setForm({ ...form, desconto: Number(e.target.value) })
                }
                className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
              />
              <select
                value={form.tipoDesconto}
                onChange={(e) =>
                  setForm({ ...form, tipoDesconto: e.target.value as any })
                }
                className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
              >
                <option value="percentual">Percentual (%)</option>
                <option value="valor">Valor (R$)</option>
              </select>
              <input
                type="date"
                value={form.validade}
                onChange={(e) => setForm({ ...form, validade: e.target.value })}
                className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
              />
            </div>
            <textarea
              placeholder="Descrição"
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
            />
            <div className="flex justify-end">
              <button
                onClick={salvarOuEditar}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
              >
                {editandoId ? (
                  <>
                    <Save className="w-4 h-4" />
                    Salvar Alterações
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    Adicionar Cupom
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Tabela */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <tr>
                  <th className="p-3">Nome</th>
                  <th className="p-3">Código</th>
                  <th className="p-3">Desconto</th>
                  <th className="p-3">Validade</th>
                  <th className="p-3 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {cupons.map((c) => (
                  <tr
                    key={c.uid}
                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-3">{c.nome}</td>
                    <td className="p-3 font-mono">{c.codigo}</td>
                    <td className="p-3">
                      {c.tipoDesconto === "percentual"
                        ? `${c.desconto}%`
                        : `R$ ${c.desconto.toFixed(2)}`}
                    </td>
                    <td className="p-3">{c.validade}</td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => editar(c)}
                        className="inline-flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition"
                      >
                        <Edit className="w-4 h-4" />
                        Editar
                      </button>
                      <button
                        onClick={() => excluir(c.uid)}
                        className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
                      >
                        <Trash2 className="w-4 h-4" />
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
                {cupons.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-6 text-center text-gray-500 dark:text-gray-400"
                    >
                      Nenhum cupom cadastrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
