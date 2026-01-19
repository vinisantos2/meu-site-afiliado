import { buscarTodosAnuncios } from "@/app/services/anuncioService";
import { TOPICOS } from "@/app/data/DataTopicos";
import { notFound } from "next/navigation";
import TopicoClient from "./TopicoClient";
import { Metadata } from "next";

export default async function TopicoPage({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const { url } = await params;

  console.log("url:", url);

  const topicoAtual = TOPICOS.find((t) => t.url === url);

  if (!topicoAtual) notFound();

  const anuncios = await buscarTodosAnuncios();

  return (
    <>
      <TopicoClient anunciosIniciais={anuncios} topicoAtual={topicoAtual} />
    </>
  );
}

export const metadata: Metadata = {
  title: "VS Tech Digital | Ofertas em Tecnologia",
  description:
    "Encontre notebooks, smartphones, smartwatches, fones e cupons com os melhores preços da internet.",
  alternates: {
    canonical: "https://vstechdigital.com.br",
  },
  openGraph: {
    title: "VS Tech Digital",
    description:
      "As melhores ofertas em tecnologia, celulares, notebooks e acessórios.",
    url: "https://vstechdigital.com.br",
    siteName: "VS Tech Digital",
    type: "website",
  },
};
