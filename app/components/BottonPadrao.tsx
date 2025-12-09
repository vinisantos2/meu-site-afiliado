import Link from "next/link";

interface ButtonPadraoProps {
  texto: string;
  href?: string; // quando for navegação
  onClick?: () => void; // quando for ação
  type?: "button" | "submit";
  variante?: "primario" | "secundario";
}

export default function ButtonPadrao({
  texto,
  href,
  onClick,
  type = "button",
  variante = "primario",
}: ButtonPadraoProps) {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variantes = {
    primario:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secundario:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const classes = `${baseStyle} ${variantes[variante]}`;

  // Quando for link (navegação)
  if (href) {
    return (
      <Link href={href} className={classes}>
        {texto}
      </Link>
    );
  }

  // Quando for botão normal
  return (
    <button type={type} onClick={onClick} className={classes}>
      {texto}
    </button>
  );
}
