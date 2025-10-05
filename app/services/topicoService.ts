// services/TopicoService.ts
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Topico } from "../types/Topico";
import { db } from "../lib/firebase";

// Coleção de usuários
const TopicosCollection = collection(db, "Topicos");

// Salvar (ou atualizar) usuário no Firestore
export async function salvarTopico(topico: Topico) {
  try {
    await addDoc(TopicosCollection, {
      ...topico,
      criadoEm: topico.criadoEm ?? new Date().toISOString(),
    });
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    throw error;
  }
}

export async function buscarTodosTopicos(): Promise<Topico[]> {
  try {
    const querySnapshot = await getDocs(TopicosCollection);

    const Topicos: Topico[] = querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();

      return {
        uid: docSnap.id,
        ...data,
      } as Topico;
    });

    return Topicos;
  } catch (error) {
    console.error("Erro ao buscar anúncios:", error);
    throw error;
  }
}

// 🟠 Editar pedido
export async function editarTopico(
  id: string,
  Topico: Omit<Topico, "id" | "cliente">
) {
  const docRef = doc(db, "Topicos", id);
  const pedidoAtualizado = {
    ...Topico,
    criadoEm: Topico.criadoEm ?? new Date().toISOString(),
  };
  await updateDoc(docRef, pedidoAtualizado);
}

// 🔴 Excluir pedido
export async function excluirTopico(id: string) {
  const docRef = doc(db, "Topicos", id);
  await deleteDoc(docRef);
}
