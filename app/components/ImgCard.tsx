export default function ImgCard({img, nome}:{img: string, nome: string}) {
  return (
    <div className="overflow-hidden mb-4 w-full flex justify-center bg-gray-600 h-56">
      <img
        src={img}
        alt={nome}
        className="max-h-full object-contain"
      />
    </div>
  );
}
