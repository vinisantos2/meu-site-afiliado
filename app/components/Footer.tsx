import Link from "next/link";
import { NOME_LOJA } from "../data/Constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* Nome + descrição */}
        <div className="text-center space-y-4">
          <h2 className="text-lg font-semibold text-white">{NOME_LOJA}</h2>

          <p className="text-sm max-w-3xl mx-auto">
            O {NOME_LOJA} é um site independente de análises, comparações e
            recomendações de produtos tecnológicos, com foco em custo-benefício
            e informação transparente.
          </p>
        </div>

        {/* Navegação inferior */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>

          <Link href="/sobre" className="hover:text-white transition-colors">
            Sobre
          </Link>

          <Link href="/contato" className="hover:text-white transition-colors">
            Contato
          </Link>

          <Link
            href="/politica-de-afiliados"
            className="hover:text-white transition-colors"
          >
            Política de Afiliados
          </Link>

          <Link
            href="/privacidade"
            className="hover:text-white transition-colors"
          >
            Privacidade
          </Link>
        </div>

        {/* Aviso de afiliados */}
        <p className="text-xs text-gray-400 text-center max-w-3xl mx-auto">
          Este site participa de programas de afiliados, incluindo o Mercado
          Livre. Alguns links podem gerar comissão para nós, sem custo adicional
          para você.
        </p>

        {/* Copyright + Crédito */}
        <div className="border-t border-gray-700 pt-4 text-xs text-gray-500 text-center space-y-2">
          <p>
            © {new Date().getFullYear()} {NOME_LOJA} • Todos os direitos
            reservados.
          </p>

          <p>
            Desenvolvido por{" "}
            <a
              href="https://vs-webeapps.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              VS Tech Web Apps
            </a>{" "}
            •{" "}
            <a
              href="https://vs-webeapps.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Portfólio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
