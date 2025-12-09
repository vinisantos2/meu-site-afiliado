import InputPadrao from "@/app/components/Input";
import SelectPadrao from "@/app/components/SelectPadrao";
import { DetalhesPlacaMae } from "@/app/types/DetalhePlacaMae";

interface Props {
  value: DetalhesPlacaMae;
  onChange: (data: DetalhesPlacaMae) => void;
}

export default function FormPlacaMae({ value, onChange }: Props) {
  function handleChange<K extends keyof DetalhesPlacaMae>(
    key: K,
    newValue: DetalhesPlacaMae[K]
  ) {
    onChange({
      ...value,
      [key]: newValue,
    });
  }

  function handleNestedChange<
    K extends keyof DetalhesPlacaMae,
    NK extends keyof DetalhesPlacaMae[K]
  >(key: K, nestedKey: NK, newValue: any) {
    onChange({
      ...value,
      [key]: {
        ...(value[key] as object),
        [nestedKey]: newValue,
      },
    });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Detalhes da Placa-Mãe</h2>

      {/* Socket */}
      <InputPadrao
        label="Socket"
        placeholder="Ex: AM5, LGA1700"
        value={value.socket}
        onChange={(e) => handleChange("socket", e.target.value)}
      />

      {/* Chipset */}
      <InputPadrao
        label="Chipset"
        placeholder="Ex: B650, Z790"
        value={value.chipset}
        onChange={(e) => handleChange("chipset", e.target.value)}
      />

      {/* Formato */}
      <SelectPadrao
        label="Formato"
        value={value.formato}
        onChange={(val) =>
          handleChange("formato", val as DetalhesPlacaMae["formato"])
        }
        options={[
          { label: "ATX", value: "ATX" },
          { label: "Micro-ATX", value: "Micro-ATX" },
          { label: "Mini-ITX", value: "Mini-ITX" },
        ]}
      />

      {/* Tipo de Memória */}
      <SelectPadrao
        label="Tipo de Memória"
        value={value.memoriaTipo}
        onChange={(val) =>
          handleChange("memoriaTipo", val as DetalhesPlacaMae["memoriaTipo"])
        }
        options={[
          { label: "DDR4", value: "DDR4" },
          { label: "DDR5", value: "DDR5" },
        ]}
      />

      {/* RAM */}
      <InputPadrao
        label="Máximo de RAM (GB)"
        type="number"
        value={value.maxRamGB.toString()}
        onChange={(e) =>
          handleChange("maxRamGB", Number(e.target.value))
        }
      />

      <InputPadrao
        label="Slots de RAM"
        type="number"
        value={value.slotsRam.toString()}
        onChange={(e) =>
          handleChange("slotsRam", Number(e.target.value))
        }
      />

      <InputPadrao
        label="Frequência Máxima da RAM (MHz)"
        type="number"
        value={value.frequenciaMaxRamMHz.toString()}
        onChange={(e) =>
          handleChange("frequenciaMaxRamMHz", Number(e.target.value))
        }
      />

      {/* PCI Express */}
      <InputPadrao
        label="PCI Express"
        placeholder="Ex: PCIe 4.0 / PCIe 5.0"
        value={value.pciExpress}
        onChange={(e) =>
          handleChange("pciExpress", e.target.value)
        }
      />

      {/* Armazenamento */}
      <h3 className="font-medium">Armazenamento</h3>
      <InputPadrao
        label="Portas SATA"
        type="number"
        value={value.armazenamento.sata.toString()}
        onChange={(e) =>
          handleNestedChange(
            "armazenamento",
            "sata",
            Number(e.target.value)
          )
        }
      />

      <InputPadrao
        label="Slots M.2"
        type="number"
        value={value.armazenamento.m2.toString()}
        onChange={(e) =>
          handleNestedChange(
            "armazenamento",
            "m2",
            Number(e.target.value)
          )
        }
      />

      {/* Rede */}
      <h3 className="font-medium">Rede</h3>
      <InputPadrao
        label="LAN"
        placeholder="Ex: 1Gb, 2.5Gb"
        value={value.rede.lan}
        onChange={(e) =>
          handleNestedChange("rede", "lan", e.target.value)
        }
      />

      <InputPadrao
        label="Wi-Fi"
        placeholder="Ex: Wi-Fi 6E"
        value={value.rede.wifi || ""}
        onChange={(e) =>
          handleNestedChange("rede", "wifi", e.target.value)
        }
      />

      <InputPadrao
        label="Bluetooth"
        placeholder="Ex: 5.3"
        value={value.rede.bluetooth || ""}
        onChange={(e) =>
          handleNestedChange("rede", "bluetooth", e.target.value)
        }
      />

      {/* USB */}
      <h3 className="font-medium">Portas USB</h3>
      <InputPadrao
        label="USB 2.0"
        type="number"
        value={value.usb.usb2.toString()}
        onChange={(e) =>
          handleNestedChange("usb", "usb2", Number(e.target.value))
        }
      />

      <InputPadrao
        label="USB 3.x"
        type="number"
        value={value.usb.usb3.toString()}
        onChange={(e) =>
          handleNestedChange("usb", "usb3", Number(e.target.value))
        }
      />

      <InputPadrao
        label="USB-C"
        type="number"
        value={value.usb.usbC.toString()}
        onChange={(e) =>
          handleNestedChange("usb", "usbC", Number(e.target.value))
        }
      />

      {/* Recursos */}
      <SelectPadrao
        label="RGB"
        value={value.rgb ? "sim" : "nao"}
        onChange={(val) => handleChange("rgb", val === "sim")}
        options={[
          { label: "Sim", value: "sim" },
          { label: "Não", value: "nao" },
        ]}
      />

      <SelectPadrao
        label="Overclock"
        value={value.overclock ? "sim" : "nao"}
        onChange={(val) => handleChange("overclock", val === "sim")}
        options={[
          { label: "Sim", value: "sim" },
          { label: "Não", value: "nao" },
        ]}
      />

      <SelectPadrao
        label="BIOS Flashback"
        value={value.biosFlashback ? "sim" : "nao"}
        onChange={(val) => handleChange("biosFlashback", val === "sim")}
        options={[
          { label: "Sim", value: "sim" },
          { label: "Não", value: "nao" },
        ]}
      />
    </div>
  );
}
