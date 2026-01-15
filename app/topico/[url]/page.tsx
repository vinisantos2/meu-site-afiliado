import NavPadrao from "@/app/components/NavPadrao";
import Footer from "@/app/components/Footer";
import { buscarTodosAnuncios } from "@/app/services/anuncioService";
import { TOPICOS } from "@/app/data/DataTopicos";
import { notFound } from "next/navigation";
import TopicoClient from "./TopicoClient";

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
      <NavPadrao />

      <TopicoClient anunciosIniciais={anuncios} topicoAtual={topicoAtual} />

      <Footer />
    </>
  );
}
