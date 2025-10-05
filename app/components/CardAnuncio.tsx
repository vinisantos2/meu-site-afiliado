import { Anuncio } from "../types/Anuncio";

type Props = {
  anuncio: Anuncio;
};

export default function CardAnuncio({ anuncio }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={anuncio.imagem}
        alt={anuncio.nome}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{anuncio.nome}</h3>
        <p className="text-gray-600 text-sm mb-2">{anuncio.descricao}</p>
        <p className="text-green-600 font-bold mb-4">R$ {anuncio.preco}</p>
        <a
          href={anuncio.link}
          target="_blank"
          className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Ver Oferta
        </a>
      </div>
    </div>
  );
}
