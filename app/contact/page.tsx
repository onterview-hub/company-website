"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("inquiries").insert([
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message,
      },
    ]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="contact" />

      <section className="pt-40 pb-16 px-6 text-center border-b border-white/10">
        <p className="text-amber-400 text-sm tracking-widest mb-3">CONTACT</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          함께 만들어갈 이야기를 기다립니다
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          교육 및 영상제작 관련 문의를 남겨주시면 빠르게 연락드리겠습니다.
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          {status === "success" ? (
            <div className="text-center border border-amber-400/40 rounded-2xl py-16 px-6">
              <p className="text-amber-400 text-xl font-bold mb-3">
                문의가 접수되었습니다
              </p>
              <p className="text-white/60">
                빠른 시일 내에 담당자가 확인 후 연락드리겠습니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none transition"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none transition"
                  placeholder="010-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none transition"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  문의내용
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none transition resize-none"
                  placeholder="문의하실 내용을 입력해주세요."
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition disabled:opacity-50"
              >
                {status === "loading" ? "전송 중..." : "문의 보내기"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}