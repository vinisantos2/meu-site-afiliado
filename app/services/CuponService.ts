// services/CuponService.ts
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
import { Cupon, CuponComId } from "../types/Cupon";

const TABLE = "cupons";
const CuponsCollection = collection(db, TABLE);

// ✅ Criar Cupom
export async function salvarCupon(cupon: Cupon) {
  try {
    await addDoc(CuponsCollection, {
      ...cupon,
      criadoEm: cupon.criadoEm ?? new Date().toISOString(),
    });
  } catch (error) {
    console.error("Erro ao salvar cupom:", error);
    throw error;
  }
}

// ✅ Buscar Cupom por ID
export async function buscarCupon(uid: string): Promise<CuponComId | null> {
  try {
    const docRef = doc(CuponsCollection, uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    return {
      uid: docSnap.id,
      ...docSnap.data(),
    } as CuponComId;
  } catch (error) {
    console.error("Erro ao buscar cupom:", error);
    throw error;
  }
}

// ✅ Buscar todos os cupons
export async function buscarTodosCupons(): Promise<CuponComId[]> {
  try {
    const querySnapshot = await getDocs(CuponsCollection);
    return querySnapshot.docs.map((docSnap) => ({
      uid: docSnap.id,
      ...docSnap.data(),
    })) as CuponComId[];
  } catch (error) {
    console.error("Erro ao buscar cupons:", error);
    throw error;
  }
}

// ✏️ Editar Cupom
export async function editarCupon(id: string, cupon: Omit<CuponComId, "uid">) {
  const docRef = doc(db, TABLE, id);
  await updateDoc(docRef, cupon);
}

// 🗑️ Excluir Cupom
export async function excluirCupon(id: string) {
  const docRef = doc(db, TABLE, id);
  await deleteDoc(docRef);
}
