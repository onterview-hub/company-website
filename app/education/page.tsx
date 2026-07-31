"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&q=80`;

const audiences = ["전체", "기업", "특성화고·청소년", "대학생", "시니어"];

const services = [
  { slug: "ai", title: "AI 교육", desc: "생성형 AI 실무 활용", img: "1690079374922-7f50d5c1a102", tags: ["기업", "특성화고·청소년", "대학생", "시니어"] },
  { slug: "career", title: "진로교육", desc: "자기이해와 방향 설계", img: "1781331756173-386c128d6f92", tags: ["특성화고·청소년", "대학생"] },
  { slug: "employment", title: "취업역량 강화교육", desc: "이력서·면접 실전 훈련", img: "1598978458053-d740c5aae5d6", tags: ["특성화고·청소년", "대학생"] },
  { slug: "startup", title: "창업교육", desc: "아이디어를 사업으로", img: "1521737852567-6949f3f9f2b5", tags: ["대학생", "기업"] },
  { slug: "job-creation", title: "창직교육", desc: "새로운 직업 설계", img: "1758873272412-7166447a94ae", tags: ["특성화고·청소년", "대학생", "시니어"] },
  { slug: "corporate", title: "기업교육", desc: "조직 맞춤형 커리큘럼", img: "1675434301763-594b4d0c5819", tags: ["기업"] },
  { slug: "mandatory", title: "법정의무교육", desc: "필수 이수교육 지원", img: "1781092176313-8b8b1e9927c7", tags: ["기업"] },
  { slug: "leadership", title: "리더십·조직문화 교육", desc: "신뢰 기반 리더십", img: "1758873268631-fa944fc5cad2", tags: ["기업"] },
  { slug: "career-experience", title: "진로체험 프로그램", desc: "현장 중심 체험", img: "1659080910507-bd9d7f3787f3", tags: ["특성화고·청소년"] },
];

export default function EducationPage() {
  const [filter, setFilter] = useState("전체");

  const filtered =
    filter === "전체" ? services : services.filter((s) => s.tags.includes(filter));

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="education" />

      <section className="pt-40 pb-20 px-6 text-center border-b border-white/10 relative overflow-hidden">
        <Stars count={40} sparkleCount={4} />
        <div className="relative z-10">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            EDUCATION
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            미래를 설계하는 교육
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            AI 시대, 진로부터 취업, 창업, 창직, 기업교육까지.
            스케치온은 변화하는 시대에 맞는 실질적인 교육을 제공합니다.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {audiences.map((a) => (
              <button
                key={a}
                onClick={() => setFilter(a)}
                className={
                  "px-5 py-2 rounded-full text-sm border transition " +
                  (filter === a
                    ? "bg-amber-400 text-black border-amber-400 font-semibold"
                    : "border-white/20 text-white/70 hover:border-amber-400 hover:text-amber-400")
                }
              >
                {a}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((item) => (
              <Link
                key={item.slug}
                href={`/education/${item.slug}`}
                className="group flex items-center gap-4 border border-white/10 rounded-2xl p-4 hover:border-amber-400/50 hover:bg-white/5 transition"
              >
                <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={unsplash(item.img)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-2">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-full border border-white/15 text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-amber-400 shrink-0 transition">
                  →
                </span>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-white/40 py-10">
              해당 대상에 맞는 교육이 준비 중입니다.
            </p>
          )}
        </div>
      </section>

      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          우리 조직에 맞는 교육이 궁금하다면
        </h2>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition"
        >
          문의하기
        </Link>
      </section>

      <Footer />
    </main>
  );
}