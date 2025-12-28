// services/PublicacaoService.ts
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "../lib/firebase";
import { Publicacao } from "../types/Publicacao";
import { DADOS } from "../data/JsonTemp";

/* =======================
   Tipos auxiliares
======================= */

export interface PublicacaoComID extends Publicacao {
  id: string;
}

/* =======================
   Coleção
======================= */

const PublicacoesCollection = collection(db, "publicacoes");

/* =======================
   Criar publicação
======================= */

export async function criarPublicacao(publicacao: Publicacao) {
  try {
    const docRef = await addDoc(PublicacoesCollection, {
      ...publicacao,
      criadoEm: new Date().toISOString(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Erro ao criar publicação:", error);
    throw error;
  }
}

/* =======================
   Criar ou atualizar por slug
   (RECOMENDADO)
======================= */

export async function salvarPublicacaoPorSlug(
  publicacao: Publicacao
) {
  try {
    if (!publicacao.slug) {
      throw new Error("Slug é obrigatório");
    }

    const docRef = doc(db, "publicacoes", publicacao.slug);

    await setDoc(
      docRef,
      {
        ...publicacao,
        criadoEm:
          publicacao.criadoEm ?? new Date().toISOString(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Erro ao salvar publicação:", error);
    throw error;
  }
}

/* =======================
   Buscar por ID
======================= */

export async function buscarPublicacaoPorId(
  id: string
): Promise<PublicacaoComID | null> {
  try {
    const docRef = doc(db, "publicacoes", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    return {
      id: docSnap.id,
      ...(docSnap.data() as Publicacao),
    };
  } catch (error) {
    console.error("Erro ao buscar publicação:", error);
    throw error;
  }
}

/* =======================
   Buscar por slug
======================= */

export async function buscarPublicacaoPorSlug(
  slug: string
): Promise<Publicacao | null> {
  try {
    const docRef = doc(db, "publicacoes", slug);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    return docSnap.data() as Publicacao;
  } catch (error) {
    console.error("Erro ao buscar publicação:", error);
    throw error;
  }
}

/* =======================
   Buscar todas
======================= */

export async function buscarTodasPublicacoes(): Promise<
  PublicacaoComID[]
> {
  try {
    const snapshot = await getDocs(PublicacoesCollection);

    return snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...(docSnap.data() as Publicacao),
    }));
  } catch (error) {
    console.error("Erro ao buscar publicações:", error);
    throw error;
  }
}

/* =======================
   Atualizar publicação
======================= */

export async function atualizarPublicacao(
  id: string,
  dados: Partial<Publicacao>
) {
  try {
    const docRef = doc(db, "publicacoes", id);

    await updateDoc(docRef, {
      ...dados,
    });
  } catch (error) {
    console.error("Erro ao atualizar publicação:", error);
    throw error;
  }
}

/* =======================
   Excluir publicação
======================= */

export async function excluirPublicacao(id: string) {
  try {
    const docRef = doc(db, "publicacoes", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao excluir publicação:", error);
    throw error;
  }
}


export async function importarPublicacoes() {
  for (const item of DADOS) {
    try {
      await addDoc(PublicacoesCollection, item);
    } catch (e) {
      console.log(e);
    }
  }

  console.log("Importação concluída!");
}