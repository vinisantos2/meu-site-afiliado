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
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`
            appearance-none
            w-full p-3 h-12 rounded-lg border
            bg-white text-sm text-gray-900
            dark:bg-gray-800 dark:text-white dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition
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

        {/* Ícone de seta */}
        <svg
          className="
            pointer-events-none
            absolute right-3 top-1/2 -translate-y-1/2
            w-4 h-4 text-gray-400
          "
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
