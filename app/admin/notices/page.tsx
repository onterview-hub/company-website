"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

type Notice = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

export default function AdminNoticesPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  const loadNotices = useCallback(async () => {
    const { data } = await supabase
      .from("notices")
      .select("*")
      .order("created_at", { ascending: false });
    setNotices(data || []);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/admin");
      } else {
        setChecking(false);
        loadNotices();
      }
    });
  }, [router, loadNotices]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    if (editingId) {
      await supabase
        .from("notices")
        .update({ title, content })
        .eq("id", editingId);
    } else {
      await supabase.from("notices").insert([{ title, content }]);
    }

    resetForm();
    await loadNotices();
    setSaving(false);
  };

  const handleEdit = (notice: Notice) => {
    setEditingId(notice.id);
    setTitle(notice.title);
    setContent(notice.content);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await supabase.from("notices").delete().eq("id", id);
    await loadNotices();
  };

  if (checking) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-white/50">확인 중...</p>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">공지사항 관리</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-white/50 hover:text-amber-400 transition"
          >
            로그아웃
          </button>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border border-white/10 rounded-2xl p-6 mb-10"
          >
            <h2 className="font-bold text-amber-400">
              {editingId ? "공지사항 수정" : "새 공지사항 작성"}
            </h2>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none transition"
            />
            <textarea
              required
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용"
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none transition resize-none"
            />
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition disabled:opacity-50"
              >
                {saving ? "저장 중..." : editingId ? "수정 완료" : "등록"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border border-white/30 rounded-full hover:border-amber-400 transition"
                >
                  취소
                </button>
              )}
            </div>
          </form>

          <div className="space-y-3">
            {notices.length === 0 && (
              <p className="text-white/40 text-center py-10">
                등록된 공지사항이 없습니다.
              </p>
            )}
            {notices.map((n) => (
              <div
                key={n.id}
                className="border border-white/10 rounded-xl p-5 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-medium">{n.title}</p>
                  <p className="text-white/40 text-sm">
                    {new Date(n.created_at).toLocaleDateString("ko-KR")}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleEdit(n)}
                    className="text-sm text-amber-400 hover:underline"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(n.id)}
                    className="text-sm text-red-400 hover:underline"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}