"use client";

import { X } from "lucide-react";
import { CuponComId } from "@/app/types/Cupon";

type Props = {
  cupon: CuponComId;
  onClose: () => void;
};

export default function ModalRegrasCupon({ cupon, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg relative">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-bold text-gray-800 mb-3">
          Regras do cupom
        </h2>

        <p className="text-gray-600 text-sm whitespace-pre-wrap">
          {cupon.regras || "Nenhuma regra informada para este cupom."}
        </p>

        <div className="mt-5 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
