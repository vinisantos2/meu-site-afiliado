"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavPadrao() {
  const router = useRouter();

  return (
    <header className="bg-gradient-to-r from-indigo-700/90 to-purple-700/90 backdrop-blur-md text-white shadow-lg border-b">
      {/* Barra principal */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row  justify-baseline px-6 py-4 gap-4 transition-all">
        {/* Logo + título */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => router.replace("/")}
        >
          <Image
            src="/imagens/VS-TECH-logo.png"
            alt="Logo do site"
            width={38}
            height={38}
            className="drop-shadow-lg group-hover:scale-105 transition-transform duration-200"
          />
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
            VS-Tech <span className="text-yellow-300">Compare</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
