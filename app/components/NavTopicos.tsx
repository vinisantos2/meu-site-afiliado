"use client";
import { useEffect, useState } from "react";
import {
  Laptop,
  Smartphone,
  Printer,
  Gamepad,
  Monitor,
  Tv,
  Headphones,
} from "lucide-react";
import { buscarTodosTopicos } from "../services/topicoService";
import { Topico } from "../types/Topico";
import { useRouter } from "next/navigation";

// Mapa de ícones disponíveis
const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Smartphone,
  Printer,
  Gamepad,
  Monitor,
  Tv,
  Headphones,
};

export default function NavTopicos() {
  const [open, setOpen] = useState(false);
  const [topicos, setTopicos] = useState<Topico[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    carregarTopicos();
  }, []);

  async function carregarTopicos() {
    setLoading(true);
    const dados = await buscarTodosTopicos();
    setTopicos(dados);
    setLoading(false);
  }

  return (
    <nav className="">
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
      >
        {open ? "Fechar Categorias" : "Ver Categorias"}
      </button>

      {/* Lista de tópicos */}
      <ul
        className={`flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center mb-2 mt-2 transition-all duration-300 ${
          open ? "flex" : "hidden md:flex"
        }`}
      >
        {loading ? (
          <li className="text-gray-500 dark:text-gray-400">Carregando...</li>
        ) : topicos.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400">
            Nenhuma categoria encontrada.
          </li>
        ) : (
          topicos.map((item, index) => {
            const Icon = item.icon ? iconMap[item.icon] : null;
            return (
              <li
                key={index}
                onClick={() => router.push(`/topico/${item.url}`)}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition"
              >
                {Icon && <Icon size={18} />}
                <span className="font-medium">{item.titulo}</span>
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
}
