"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function CampoBuscaPadrao({
  value,
  onChange,
  placeholder = "Buscar...",
  className = "",
}: Props) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full p-3 pl-10 rounded-lg border
          bg-white text-gray-900
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />

      {/* Ícone de busca */}
      <svg
        className="
          absolute left-3 top-1/2 -translate-y-1/2
          w-5 h-5 text-gray-400
        "
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.6-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
