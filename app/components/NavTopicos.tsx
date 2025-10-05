"use client";
import { useState } from "react";
import { Laptop, Smartphone, Printer, Gamepad, Monitor, Tv, Headphones } from "lucide-react";

export default function NavTopicos() {
  const [open, setOpen] = useState(false);

  const topicos = [
    { nome: "Notebook", icon: Laptop },
    { nome: "Smartphone", icon: Smartphone },
    { nome: "Impressoras", icon: Printer },
    { nome: "PC Gamer", icon: Monitor },
    { nome: "Console", icon: Gamepad },
    { nome: "Smart TV", icon: Tv },
    { nome: "Acessórios Gamer", icon: Headphones },
  ];

  return (
    <div className="mt-8">
      {/* Botão para mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
      >
        {open ? "Fechar Tópicos" : "Ver Tópicos"}
      </button>

      {/* Lista de tópicos */}
      <ul
        className={`flex flex-col md:flex-row gap-4 mt-4 justify-center items-center ${
          open ? "flex" : "hidden md:flex"
        }`}
      >
        {topicos.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 cursor-pointer transition"
            >
              <Icon size={18} />
              <span className="font-medium">{item.nome}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
