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
      [key]: newValue
    });
  }

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Detalhes do Notebook</h2>

      <input
        type="text"
        placeholder="Processador"
        value={value.processador}
        onChange={(e) => handleChange("processador", e.target.value)}
      />

      <input
        type="number"
        placeholder="Memória RAM (GB)"
        value={value.ramGB}
        onChange={(e) => handleChange("ramGB", Number(e.target.value))}
      />

      <input
        type="text"
        placeholder="Armazenamento"
        value={value.armazenamento}
        onChange={(e) => handleChange("armazenamento", e.target.value)}
      />

      <select
        value={value.tipoArmazenamento}
        onChange={(e) =>
          handleChange("tipoArmazenamento", e.target.value as any)
        }
      >
        <option value="SSD">SSD</option>
        <option value="HDD">HDD</option>
        <option value="NVMe">NVMe</option>
      </select>

      <input
        type="text"
        placeholder="Placa de Vídeo"
        value={value.placaVideo || ""}
        onChange={(e) => handleChange("placaVideo", e.target.value)}
      />

      <input
        type="text"
        placeholder="Tela"
        value={value.tela}
        onChange={(e) => handleChange("tela", e.target.value)}
      />

      <input
        type="text"
        placeholder="Sistema Operacional"
        value={value.sistema}
        onChange={(e) => handleChange("sistema", e.target.value)}
      />

      <input
        type="text"
        placeholder="Bateria"
        value={value.bateria || ""}
        onChange={(e) => handleChange("bateria", e.target.value)}
      />

      <input
        type="text"
        placeholder="Peso"
        value={value.peso || ""}
        onChange={(e) => handleChange("peso", e.target.value)}
      />
    </div>
  );
}
