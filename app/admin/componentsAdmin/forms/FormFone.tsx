import { DetalhesFone } from "@/app/types/DetalhesFone";

import InputPadrao from "@/app/components/Input";
import CheckboxPadrao from "@/app/components/CheckboxPadrao";

interface Props {
  value: DetalhesFone;
  onChange: (data: DetalhesFone) => void;
}

export default function FormFone({ value, onChange }: Props) {
  function handleChange<K extends keyof DetalhesFone>(
    key: K,
    newValue: DetalhesFone[K]
  ) {
    onChange({
      ...value,
      [key]: newValue,
    });
  }

  return (
    <div className="space-y-4 border p-4 rounded">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        🎧 Detalhes do Fone de Ouvido
      </h2>

      <InputPadrao
        label="Tipo"
        placeholder="Ex: TWS, Over-Ear, On-Ear"
        value={value.tipo}
        onChange={(e) => handleChange("tipo", e.target.value as any)}
      />

      <InputPadrao label="Conectividade" value={value.conectividade}  />

      <InputPadrao
        label="Versão do Bluetooth"
        placeholder="Ex: 5.3"
        value={value.bluetoothVersao ?? ""}
        onChange={(e) => handleChange("bluetoothVersao", e.target.value)}
      />

      <CheckboxPadrao
        label="Possui cancelamento de ruído ativo (ANC)?"
        checked={value.cancelamentoRuido}
        onChange={(val) => handleChange("cancelamentoRuido", val)}
      />

      <InputPadrao
        label="Bateria (horas)"
        type="number"
        value={value.bateriaHoras.toString()}
        onChange={(e) =>
          handleChange(
            "bateriaHoras",
            e.target.value ? Number(e.target.value) : 0
          )
        }
      />

      <InputPadrao
        label="Bateria com estojo (horas)"
        type="number"
        value={value.bateriaComEstojoHoras?.toString() ?? ""}
        onChange={(e) =>
          handleChange(
            "bateriaComEstojoHoras",
            e.target.value ? Number(e.target.value) : undefined
          )
        }
      />

      <InputPadrao
        label="Resistência à água (IP)"
        placeholder="Ex: IPX4, IPX7"
        value={value.resistenciaAgua ?? ""}
        onChange={(e) => handleChange("resistenciaAgua", e.target.value)}
      />

      <CheckboxPadrao
        label="Possui microfone?"
        checked={value.microfone}
        onChange={(val) => handleChange("microfone", val)}
      />

      <InputPadrao
        label="Tipo de controle"
        placeholder="Ex: Toque, Botão"
        value={value.controles}
        onChange={(e) => handleChange("controles", e.target.value as any)}
      />

      <InputPadrao
        label="Compatibilidade"
        placeholder="Ex: Android, iOS, Windows"
        value={value.compatibilidade.join(", ")}
        onChange={(e) =>
          handleChange(
            "compatibilidade",
            e.target.value.split(",").map((v) => v.trim())
          )
        }
      />
    </div>
  );
}
