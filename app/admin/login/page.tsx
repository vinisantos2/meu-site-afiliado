"use client";

import { useEffect, useState } from "react";
import { useAuthRedirectAdmin } from "../hooks/useAuthRedirectAdmin";
import Loading from "@/app/components/Loading";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const [erro, setErro] = useState("");
  const { loading, usuario } = useAuthRedirectAdmin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

     await signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        router.replace("/admin/");
      })
      .catch((erro) => {
        setErro("Erro ao logar");
        console.log(erro);
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">Admin Login</h1>

        {erro && <p className="text-red-500 text-center font-medium">{erro}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="admin@exemplo.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors py-2 rounded-lg font-semibold text-white"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
          Esqueceu a senha?{" "}
          <span className="text-indigo-500 cursor-pointer hover:underline">
            Recuperar
          </span>
        </p>
      </div>
    </div>
  );
}
