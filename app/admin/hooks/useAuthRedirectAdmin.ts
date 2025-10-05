// src/hooks/useAuthRedirectAdmin.ts
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/app/lib/firebase";
import { Usuario } from "@/app/types/Usuario";

export function useAuthRedirectAdmin() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        router.replace("/admin/login");
        setUsuario(null);
        setLoading(false);
        return;
      } else {
        setUsuario(null);
        setLoading(false);
        router.replace("/admin/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return { usuario, loading };
}
