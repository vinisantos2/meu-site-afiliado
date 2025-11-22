// components/TextareaPadrao.tsx
type TextareaPadraoProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
};

export default function TextareaPadrao({
  label,
  value,
  onChange,
  rows = 3,
  placeholder,
}: TextareaPadraoProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-semibold">{label}</label>}

      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full p-2 border rounded text-sm resize-none"
      />
    </div>
  );
}
