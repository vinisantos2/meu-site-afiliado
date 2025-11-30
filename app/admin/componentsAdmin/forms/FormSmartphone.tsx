import { DetalhesSmartphone } from "@/app/types/DetalheSmartphone";

import InputPadrao from "@/app/components/Input";
import CheckboxPadrao from "@/app/components/CheckboxPadrao";

interface Props {
  value: DetalhesSmartphone;
  onChange: (data: DetalhesSmartphone) => void;
}

export default function FormSmartphone({ value, onChange }: Props) {

  function handleChange<K extends keyof DetalhesSmartphone>(
    key: K,
    newValue: DetalhesSmartphone[K]
  ) {
    onChange({
      ...value,
      [key]: newValue,
    });
  }

  return (
    <div className="space-y-4 border p-4 rounded">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        📱 Detalhes do Smartphone
      </h2>

      <InputPadrao
        label="Processador"
        placeholder="Ex: Snapdragon 695"
        value={value.processador}
        onChange={(e) => handleChange("processador", e.target.value)}
      />

      <InputPadrao
        label="RAM (GB)"
        type="number"
        value={value.ramGB.toString()}
        onChange={(e) =>
          handleChange(
            "ramGB",
            e.target.value ? Number(e.target.value) : 0
          )
        }
      />

      <InputPadrao
        label="Armazenamento (GB)"
        type="number"
        value={value.armazenamentoGB.toString()}
        onChange={(e) =>
          handleChange(
            "armazenamentoGB",
            e.target.value ? Number(e.target.value) : 0
          )
        }
      />

      <InputPadrao
        label="Tela"
        placeholder="Ex: 6.5\ AMOLED"
        value={value.tela}
        onChange={(e) => handleChange("tela", e.target.value)}
      />

      <InputPadrao
        label="Bateria (mAh)"
        type="number"
        value={value.bateriaMah.toString()}
        onChange={(e) =>
          handleChange(
            "bateriaMah",
            e.target.value ? Number(e.target.value) : 0
          )
        }
      />

      <InputPadrao
        label="Câmeras"
        placeholder="Ex: 50MP + 8MP + 2MP"
        value={value.cameras}
        onChange={(e) => handleChange("cameras", e.target.value)}
      />

      <InputPadrao
        label="Sistema"
        placeholder="Ex: Android 14"
        value={value.sistema}
        onChange={(e) => handleChange("sistema", e.target.value)}
      />

      <CheckboxPadrao
        label="Possui 5G?"
        checked={value.tem5G}
        onChange={(val) => handleChange("tem5G", val)}
      />
    </div>
  );
}
