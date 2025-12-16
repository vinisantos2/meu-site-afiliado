
import InputPadrao from "@/app/components/Input";
import CheckboxPadrao from "@/app/components/CheckboxPadrao";
import { DetalhesSmartwatch } from "@/app/types/DetelhesSmartwatch";

interface Props {
  value: DetalhesSmartwatch;
  onChange: (data: DetalhesSmartwatch) => void;
}

export default function FormSmartWatch({ value, onChange }: Props) {
  function handleChange<K extends keyof DetalhesSmartwatch>(
    key: K,
    newValue: DetalhesSmartwatch[K]
  ) {
    onChange({
      ...value,
      [key]: newValue,
    });
  }

  return (
    <div className="space-y-4 border p-4 rounded">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        ⌚ Detalhes do Smartwatch
      </h2>

      <InputPadrao
        label="Tipo"
        placeholder="Ex: Esportivo, Casual, Premium"
        value={value.tipo}
        onChange={(e) =>
          handleChange("tipo", e.target.value as DetalhesSmartwatch["tipo"])
        }
      />

      <InputPadrao
        label="Conectividade"
        value={value.conectividade}
        onChange={(e) =>
          handleChange(
            "conectividade",
            e.target.value as DetalhesSmartwatch["conectividade"]
          )
        }
      />

      <InputPadrao
        label="Versão do Bluetooth"
        placeholder="Ex: 5.2, 5.3"
        value={value.bluetoothVersao ?? ""}
        onChange={(e) => handleChange("bluetoothVersao", e.target.value)}
      />

      <CheckboxPadrao
        label="Possui cancelamento de ruído (ANC)?"
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
        placeholder="Ex: IP67, IP68, 5ATM"
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
        onChange={(e) =>
          handleChange(
            "controles",
            e.target.value as DetalhesSmartwatch["controles"]
          )
        }
      />

      <InputPadrao
        label="Compatibilidade"
        placeholder="Ex: Android, iOS"
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
