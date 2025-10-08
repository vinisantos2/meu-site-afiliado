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
import { Anuncio } from "../types/Anuncio";
import { db } from "../lib/firebase";

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
export async function buscarAnuncio(uid: string): Promise<Anuncio | null> {
  try {
    const docRef = doc(AnunciosCollection, uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    const data = docSnap.data();

    return {
      uid: docSnap.id,
      ...data,
    } as Anuncio;
  } catch (error) {
    console.error("Erro ao buscar anúncio:", error);
    throw error;
  }
}

export async function buscarTodosAnuncios(): Promise<Anuncio[]> {
  try {
    const querySnapshot = await getDocs(AnunciosCollection);

    const anuncios: Anuncio[] = querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();

      return {
        uid: docSnap.id,
        ...data,
      } as Anuncio;
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
