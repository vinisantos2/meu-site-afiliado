// components/CampoLista.tsx
type CampoListaProps = {
  label: string;
  placeholder: string;
  valores: string[];
  onAdd: (value: string) => void;
  onRemove: (index: number) => void;
  renderItem?: (valor: string, index: number) => React.ReactNode;
};

export default function CampoLista({
  label,
  placeholder,
  valores,
  onAdd,
  onRemove,
  renderItem,
}: CampoListaProps) {
  return (
    <div>
      <label className="font-semibold">{label}</label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-2 border rounded mt-1"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            const value = (e.target as HTMLInputElement).value.trim();

            if (value) {
              onAdd(value);
              (e.target as HTMLInputElement).value = "";
            }
          }
        }}
      />

      <div className="mt-2 space-y-2">
        {valores.map((valor, index) =>
          renderItem ? (
            renderItem(valor, index)
          ) : (
            <div
              key={index}
              className="flex justify-between bg-gray-500 p-2 rounded text-sm"
            >
              <span>{valor}</span>
              <button type="button" onClick={() => onRemove(index)}>
                ✕
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
