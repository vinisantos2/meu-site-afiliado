// services/AnuncioService.ts
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { NOTEBOOKS_RANK } from "../data/JsonTemp";
import { Anuncio, AnuncioComId } from "../types/AnuncioBase";

// Coleção de usuários
const AnunciosCollection = collection(db, "anuncios");

// Salvar (ou atualizar) usuário no Firestore
export async function salvarAnuncio(anuncio: Anuncio) {
  try {
    await addDoc(AnunciosCollection, {
      ...anuncio,
      criadoEm: anuncio.criadoEm ?? new Date().toISOString(),
    });
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    throw error;
  }
}

// Buscar anúncio por UID
export async function buscarAnuncio(uid: string): Promise<AnuncioComId | null> {
  try {
    const docRef = doc(AnunciosCollection, uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    const data = docSnap.data();

    return {
      uid: docSnap.id,
      ...data,
    } as AnuncioComId;
  } catch (error) {
    console.error("Erro ao buscar anúncio:", error);
    throw error;
  }
}

export async function buscarTodosAnuncios(): Promise<AnuncioComId[]> {
  try {
    const querySnapshot = await getDocs(AnunciosCollection);

    const anuncios: AnuncioComId[] = querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();

      return {
        uid: docSnap.id, // 👈 adicionando o ID do documento
        ...data,
      } as AnuncioComId;
    });

    return anuncios;
  } catch (error) {
    console.error("Erro ao buscar anúncios:", error);
    throw error;
  }
}

// 🟠 Editar pedido
export async function editarAnuncio(
  id: string,
  anuncio: Omit<Anuncio, "id" | "cliente">
) {
  const docRef = doc(db, "anuncios", id);
  const pedidoAtualizado = {
    ...anuncio,
    criadoEm: anuncio.criadoEm ?? new Date().toISOString(),
  };
  await updateDoc(docRef, pedidoAtualizado);
}

// 🔴 Excluir pedido
export async function excluirAnuncio(id: string) {
  const docRef = doc(db, "anuncios", id);
  await deleteDoc(docRef);
}

export async function importarNotebooks() {
  for (const item of NOTEBOOKS_RANK) {
    await addDoc(AnunciosCollection, item);
  }

  console.log("Importação concluída!");
}
