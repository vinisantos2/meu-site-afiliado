type InputPadraoProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
};

export default function InputPadrao({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: InputPadraoProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-semibold text-sm">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded text-sm h-9"
      />
    </div>
  );
}
