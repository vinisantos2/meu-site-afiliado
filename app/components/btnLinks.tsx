import { ShoppingCart } from "lucide-react";

export default function BtnLinks({ link }: { link: string }) {
  if (!link || link.length === 0) return null;

  const identifyStore = (url: string) => {
    if (url.includes("mercadolivre")) {
      return {
        name: "Mercado Livre",
        color: "#fff159",
        hover: "#ffea00",
      };
    }

    if (url.includes("amazon")) {
      return {
        name: "Amazon",
        color: "#ff9900",
        hover: "#e68a00",
      };
    }

    if (url.includes("shopee")) {
      return {
        name: "Shopee",
        color: "#ee4d2d",
        hover: "#d94427",
      };
    }

    if (url.includes("magazineluiza") || url.includes("magalu")) {
      return {
        name: "Magalu",
        color: "#009BDB",
        hover: "#007bb0",
      };
    }

    return {
      name: "Ver Produto",
      color: "#ccc",
      hover: "#bbb",
    };
  };

  const store = identifyStore(link);

  return (
    <a
      href={link}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
      className="mt-auto flex items-center text-gray-950 justify-center gap-2 font-semibold py-2 rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
      style={{
        backgroundColor: store.color,
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          store.hover;
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          store.color;
      }}
    >
      <ShoppingCart className="w-5 h-5" />
      {store.name}
    </a>
  );
}
