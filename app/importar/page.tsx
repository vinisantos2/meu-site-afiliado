"use client";

import { importarDados } from "../services/anuncioService";

export default function Page() {
  const handleImport = async () => {
    await importarDados();
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
