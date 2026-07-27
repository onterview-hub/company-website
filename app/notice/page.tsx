"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

type Notice = {
  id: number;
  title: string;
  created_at: string;
};

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("notices")
      .select("id, title, created_at")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setNotices(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="notice" />

      <section className="pt-40 pb-20 px-6 text-center border-b border-white/10">
        <p className="text-amber-400 text-sm tracking-widest mb-3">NOTICE</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">공지사항</h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          스케치온의 새로운 소식을 전해드립니다.
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {loading && (
            <p className="text-white/40 text-center py-10">불러오는 중...</p>
          )}
          {!loading && notices.length === 0 && (
            <p className="text-white/40 text-center py-10">
              등록된 공지사항이 없습니다.
            </p>
          )}
          <div className="divide-y divide-white/10">
            {notices.map((n) => (
              <Link
                key={n.id}
                href={`/notice/${n.id}`}
                className="flex items-center justify-between py-5 hover:text-amber-400 transition"
              >
                <span>{n.title}</span>
                <span className="text-white/40 text-sm shrink-0 ml-4">
                  {new Date(n.created_at).toLocaleDateString("ko-KR")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}