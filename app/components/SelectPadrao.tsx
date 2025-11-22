// components/SelectPadrao.tsx

type Option = {
  label: string;
  value: string;
};

type SelectPadraoProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
};

export default function SelectPadrao({
  label,
  value,
  onChange,
  options,
  placeholder = "Selecione...",
  className = "",
}: SelectPadraoProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-semibold text-sm">{label}</label>}

      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`
          w-full p-2 border rounded text-sm h-9
          dark:bg-gray-700 dark:border-gray-600 dark:text-white
          ${className}
        `}
      >
        <option value="">{placeholder}</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
