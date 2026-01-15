// services/PublicacaoService.ts
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  limit,
} from "firebase/firestore";

import { db } from "../lib/firebase";
import { Publicacao, PublicacaoComID } from "../types/Publicacao";
import { DADOS_PUBLICACOES } from "../data/JsonTempPublicacoes";

/* =======================
   Coleção
======================= */

const PublicacoesCollection = collection(db, "publicacoes");

/* =======================
   Criar publicação (UID)
======================= */

export async function criarPublicacao(publicacao: Publicacao): Promise<string> {
  try {
    const docRef = await addDoc(PublicacoesCollection, {
      ...publicacao,
      criadoEm: publicacao.criadoEm ?? new Date().toISOString(),
    });

    // salva o uid dentro do documento
    await updateDoc(docRef, {
      uid: docRef.id,
    });

    return docRef.id;
  } catch (error) {
    console.error("Erro ao criar publicação:", error);
    throw error;
  }
}

/* =======================
   Buscar por UID
======================= */

export async function buscarPublicacaoPorUid(
  uid: string
): Promise<Publicacao | null> {
  try {
    const docRef = doc(db, "publicacoes", uid);
    const snap = await getDoc(docRef);

    if (!snap.exists()) return null;

    return snap.data() as Publicacao;
  } catch (error) {
    console.error("Erro ao buscar publicação:", error);
    throw error;
  }
}

/* =======================
   Buscar por slug (SEO)
======================= */

export async function buscarPublicacaoPorSlug(
  slug: string
): Promise<Publicacao | null> {
  try {
    const q = query(PublicacoesCollection, where("slug", "==", slug), limit(1));

    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    return snapshot.docs[0].data() as Publicacao;
  } catch (error) {
    console.error("Erro ao buscar publicação por slug:", error);
    throw error;
  }
}

/* =======================
   Buscar todas
======================= */

export async function buscarTodasPublicacoes(): Promise<PublicacaoComID[]> {
  try {
    const snapshot = await getDocs(PublicacoesCollection);

    return snapshot.docs.map((docSnap) => ({
      ...(docSnap.data() as PublicacaoComID),
      uid: docSnap.id,
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
  uid: string,
  dados: Partial<Publicacao>
) {
  try {
    const docRef = doc(db, "publicacoes", uid);
    await updateDoc(docRef, dados);
  } catch (error) {
    console.error("Erro ao atualizar publicação:", error);
    throw error;
  }
}

/* =======================
   Excluir publicação
======================= */

export async function excluirPublicacao(uid: string) {
  try {
    await deleteDoc(doc(db, "publicacoes", uid));
  } catch (error) {
    console.error("Erro ao excluir publicação:", error);
    throw error;
  }
}

/* =======================
   Importar publicações
======================= */

export async function importarPublicacoes() {
  for (const item of DADOS_PUBLICACOES) {
    const docRef = await addDoc(PublicacoesCollection, {
      ...item,
      criadoEm: item.criadoEm ?? new Date().toISOString(),
    });

    await updateDoc(docRef, {
      uid: docRef.id,
    });
  }

  console.log("Importação concluída!");
}
