import { DetalhesSmartphone } from "@/app/types/DetalheSmartphone";

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
      [key]: newValue
    });
  }

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Detalhes do Smartphone</h2>

      <input
        type="text"
        placeholder="Processador"
        value={value.processador}
        onChange={(e) => handleChange("processador", e.target.value)}
      />

      <input
        type="number"
        placeholder="RAM (GB)"
        value={value.ramGB}
        onChange={(e) => handleChange("ramGB", Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Armazenamento (GB)"
        value={value.armazenamentoGB}
        onChange={(e) => handleChange("armazenamentoGB", Number(e.target.value))}
      />

      <input
        type="text"
        placeholder="Tela"
        value={value.tela}
        onChange={(e) => handleChange("tela", e.target.value)}
      />

      <input
        type="number"
        placeholder="Bateria (mAh)"
        value={value.bateriaMah}
        onChange={(e) => handleChange("bateriaMah", Number(e.target.value))}
      />

      <input
        type="text"
        placeholder="Câmeras"
        value={value.cameras}
        onChange={(e) => handleChange("cameras", e.target.value)}
      />

      <input
        type="text"
        placeholder="Sistema"
        value={value.sistema}
        onChange={(e) => handleChange("sistema", e.target.value)}
      />

      <div className="flex items-center gap-2">
        <label>Tem 5G?</label>
        <input
          type="checkbox"
          checked={value.tem5G}
          onChange={(e) => handleChange("tem5G", e.target.checked)}
        />
      </div>
    </div>
  );
}
