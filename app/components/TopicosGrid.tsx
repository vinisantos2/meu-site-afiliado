"use client";

import * as Icons from "lucide-react";
import Link from "next/link";
import { TOPICOS } from "../data/DataTopicos";
// Importar o tipo Icon do lucide-react para tipagem

export default function TopicosGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {TOPICOS.map((item) => {
        // --- Linha Corrigida/Reforçada ---
        const Icon = (Icons[item.icon as keyof typeof Icons] || Icons.HelpCircle) as Icons.LucideIcon;

        return (
          <Link
            key={item.url}
            href={`/topico/${item.url}`}
            className="
              flex flex-col items-center justify-center gap-2 p-5 rounded-2xl 
              bg-white dark:bg-zinc-900
              shadow-sm border border-zinc-200 dark:border-zinc-700
              hover:shadow-lg hover:scale-105 dark:hover:shadow-blue-900/40
              transition-all duration-200
            "
          >
            {/* Linha 27: Aqui o componente Icon está tipado corretamente */}
            <Icon size={32} className="text-blue-600 dark:text-blue-400" />
            <p className="font-semibold text-center capitalize text-zinc-800 dark:text-zinc-200">
              {item.titulo}
            </p>
          </Link>
        );
      })}
    </div>
  );
}