"use client";

import { importarPublicacoes } from "../services/PublicacaoService";


export default function Page() {
  const handleImport = async () => {
    await importarPublicacoes();
    alert("Importado com sucesso!");
  };

  return (
    <div className="p-10">
      <button
        onClick={handleImport}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Importar dados
      </button>
    </div>
  );
}
