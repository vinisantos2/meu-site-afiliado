// components/CheckboxPadrao.tsx
type CheckboxPadraoProps = {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export default function CheckboxPadrao({
  label,
  checked,
  onChange,
}: CheckboxPadraoProps) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}
