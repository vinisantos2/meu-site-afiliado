import { ShoppingCart } from "lucide-react";

export default function BtnMercadoLivre({ link }: { link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
      className="mt-auto flex items-center justify-center gap-2 bg-[#fff159] text-[#333] font-semibold py-2 rounded-lg hover:bg-[#ffea00] hover:text-amber-900 transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
    >
      <ShoppingCart className="w-5 h-5" />
      Ver no Mercado Livre
    </a>
  );
}
