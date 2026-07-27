"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

type Notice = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

export default function NoticeDetailPage() {
  const params = useParams();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("notices")
      .select("*")
      .eq("id", params.id)
      .single()
      .then(({ data }) => {
        setNotice(data);
        setLoading(false);
      });
  }, [params.id]);

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="notice" />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {loading && <p className="text-white/40 text-center py-10">불러오는 중...</p>}
          {!loading && !notice && (
            <p className="text-white/40 text-center py-10">
              존재하지 않는 게시물입니다.
            </p>
          )}
          {notice && (
            <>
              <p className="text-amber-400 text-sm tracking-widest mb-3">
                NOTICE
              </p>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                {notice.title}
              </h1>
              <p className="text-white/40 text-sm mb-10 pb-10 border-b border-white/10">
                {new Date(notice.created_at).toLocaleDateString("ko-KR")}
              </p>
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {notice.content}
              </p>
            </>
          )}
          <div className="mt-16 text-center">
            <Link
              href="/notice"
              className="inline-block px-8 py-3 border border-white/30 rounded-full hover:border-amber-400 hover:text-amber-400 transition"
            >
              목록으로 돌아가기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}