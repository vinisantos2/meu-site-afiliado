"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Laptop,
  Smartphone,
  Printer,
  Gamepad,
  Monitor,
  Tv,
  Headphones,
} from "lucide-react";
import { Topico } from "../types/Topico";
import { useRouter } from "next/navigation";
import { TOPICOS } from "../data/DataTopicos";
import { Anuncio } from "../types/Anuncio";
import { buscarTodosAnuncios } from "../services/anuncioService";

// 🧭 Mapa de ícones disponíveis
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
  const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 📥 Busca anúncios no Firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await buscarTodosAnuncios(); // busca todos anúncios do Firestore
        setAnuncios(data);
      } catch (err) {
        console.error("Erro ao buscar anúncios:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 🧠 Filtra tópicos que têm anúncios
  const topicosComAnuncios = useMemo(() => {
    return TOPICOS.filter((topico) =>
      anuncios.some((anuncio) => anuncio.topico === topico.url)
    );
  }, [anuncios]);

  if (loading) {
    return <p className="text-center text-gray-500">Carregando categorias...</p>;
  }

  return (
    <nav>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
      >
        {open ? "Fechar Categorias" : "Ver Categorias"}
      </button>

      <ul
        className={`flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center mb-2 mt-2 transition-all duration-300 ${
          open ? "flex" : "hidden md:flex"
        }`}
      >
        {topicosComAnuncios.map((item, index) => {
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
        })}
      </ul>
    </nav>
  );
}
