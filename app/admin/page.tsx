"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.push("/admin/notices");
      }
    });
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      setLoading(false);
    } else {
      router.push("/admin/notices");
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-sm mx-auto">
          <h1 className="text-2xl font-bold mb-8 text-center">관리자 로그인</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none transition"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none transition"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition disabled:opacity-50"
            >
              {loading ? "로그인 중..." : "로그인"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}