
import InputPadrao from "@/app/components/Input";
import SelectPadrao from "@/app/components/SelectPadrao";
import { DetalhesNotebook } from "@/app/types/DetalhesNotebook ";

interface Props {
  value: DetalhesNotebook;
  onChange: (data: DetalhesNotebook) => void;
}

export default function FormNotebook({ value, onChange }: Props) {
  function handleChange<K extends keyof DetalhesNotebook>(
    key: K,
    newValue: DetalhesNotebook[K]
  ) {
    onChange({
      ...value,
      [key]: newValue,
    });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Detalhes do Notebook</h2>

      {/* Processador */}
      <InputPadrao
        label="Processador"
        placeholder="Ex: Intel i5 1135G7"
        value={value.processador}
        onChange={(e) => handleChange("processador", e.target.value)}
      />

      {/* RAM */}
      <InputPadrao
        label="Memória RAM (GB)"
        type="number"
        placeholder="Ex: 8"
        value={value.ramGB.toString()}
        onChange={(e) => handleChange("ramGB", Number(e.target.value))}
      />

      {/* Armazenamento */}
      <InputPadrao
        label="Armazenamento"
        placeholder="Ex: 256GB"
        value={value.armazenamento}
        onChange={(e) => handleChange("armazenamento", e.target.value)}
      />

      {/* Tipo de Armazenamento */}
      <SelectPadrao
        label="Tipo de Armazenamento"
        value={value.tipoArmazenamento}
        onChange={(val) =>
          handleChange(
            "tipoArmazenamento",
            val as DetalhesNotebook["tipoArmazenamento"]
          )
        }
        options={[
          { label: "SSD", value: "SSD" },
          { label: "HDD", value: "HDD" },
          { label: "NVMe", value: "NVMe" },
        ]}
      />

      {/* Placa de Vídeo */}
      <InputPadrao
        label="Placa de Vídeo"
        placeholder="Ex: RTX 3050"
        value={value.placaVideo || ""}
        onChange={(e) => handleChange("placaVideo", e.target.value)}
      />

      {/* Tela */}
      <InputPadrao
        label="Tela"
        placeholder="Ex: 15.6” Full HD"
        value={value.tela}
        onChange={(e) => handleChange("tela", e.target.value)}
      />

      {/* Sistema Operacional */}
      <InputPadrao
        label="Sistema Operacional"
        placeholder="Ex: Windows 11"
        value={value.sistema}
        onChange={(e) => handleChange("sistema", e.target.value)}
      />

      {/* Bateria */}
      <InputPadrao
        label="Bateria"
        placeholder="Ex: 45Wh / 6 horas"
        value={value.bateria || ""}
        onChange={(e) => handleChange("bateria", e.target.value)}
      />

      {/* Peso */}
      <InputPadrao
        label="Peso"
        placeholder="Ex: 1.6kg"
        value={value.peso || ""}
        onChange={(e) => handleChange("peso", e.target.value)}
      />
    </div>
  );
}
