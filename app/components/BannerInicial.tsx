import Image from "next/image";
import NavTopicos from "./NavTopicos";

export default function BannerInicial() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
      <div className="flex justify-center mb-6">
        <Image
          src="/imagens/VS-TECH-logo.png"
          alt="Logo do site"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">VS-Tech Ofertas</h1>
      <p className="text-lg max-w-2xl mx-auto">
        Dicas de tecnologia, custo-benefício e os melhores produtos para você
        comprar com segurança.
      </p>

      {/* Nav no rodapé do banner */}
      <NavTopicos />
    </header>
  );
}
