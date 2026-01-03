import { MetadataRoute } from "next";
import { buscarTodasPublicacoes } from "@/app/services/PublicacaoService";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vstechdigital.com.br";

  const publicacoes = await buscarTodasPublicacoes();

  const paginasPublicacoes: MetadataRoute.Sitemap = publicacoes
    .filter((p) => p.publicado)
    .map((p) => {
      let path = "";

      if (p.tipo === "ranking") {
        path = `/topico/${p.slug}`;
      } else if (p.tipo === "cupom") {
        path = `/cupons/${p.slug}`;
      } else {
        path = `/guias/${p.slug}`;
      }

      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date(p.criadoEm),
        changeFrequency: "weekly",
        priority: 0.7,
      };
    });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...paginasPublicacoes,
  ];
}
