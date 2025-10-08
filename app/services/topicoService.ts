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

// ✅ Nome da coleção em minúsculo (boas práticas)
const topicosCollection = collection(db, "topicos");

// 🟢 Criar novo tópico
export async function salvarTopico(topico: Omit<Topico, "uid">) {
  try {
    await addDoc(topicosCollection, {
      ...topico,
      criadoEm: topico.criadoEm ?? new Date().toISOString(),
    });
  } catch (error) {
    console.error("Erro ao salvar tópico:", error);
    throw error;
  }
}

// 🟣 Buscar todos os tópicos
export async function buscarTodosTopicos(): Promise<Topico[]> {
  try {
    const querySnapshot = await getDocs(topicosCollection);

    const topicos: Topico[] = querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();

      return {
        uid: docSnap.id,
        ...data,
      } as Topico;
    });

    return topicos;
  } catch (error) {
    console.error("Erro ao buscar tópicos:", error);
    throw error;
  }
}

// 🟠 Editar tópico
export async function editarTopico(id: string, topico: Topico) {
  try {
    const docRef = doc(db, "topicos", id);
    const topicoAtualizado = {
      ...topico,
      criadoEm: topico.criadoEm ?? new Date().toISOString(),
    };
    await updateDoc(docRef, topicoAtualizado);
  } catch (error) {
    console.error("Erro ao editar tópico:", error);
    throw error;
  }
}

// 🔴 Excluir tópico
export async function excluirTopico(id: string) {
  try {
    const docRef = doc(db, "topicos", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao excluir tópico:", error);
    throw error;
  }
}
