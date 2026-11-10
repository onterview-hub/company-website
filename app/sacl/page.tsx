import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";
import { saclProgram } from "@/app/sacl";
import LessonList from "./LessonList";

export const metadata: Metadata = {
  title: "SACL 스케치온 AI CAREER LAB",
  description: saclProgram.headline,
};

export default function SaclPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="home" />

      {/* 상단 소개 */}
      <section className="relative overflow-hidden px-6 pt-28 pb-20 text-center border-b border-white/10">
        <Stars count={60} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-5">
            {saclProgram.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            AI로 설계하는 진로·취업·창업·창직
          </h1>
          <p className="text-white/60 text-base md:text-lg mb-6">
            {saclProgram.headline}
          </p>
          <p className="text-white/80">
            <span className="text-amber-400 font-semibold">48강</span> ·{" "}
            <span className="text-amber-400 font-semibold">24시간</span> ·{" "}
            <span className="text-amber-400 font-semibold">5개 과정</span>
          </p>
        </div>
      </section>

      {/* 강의 목록 */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <LessonList />
        </div>
      </section>

      {/* 프로그램 상세 안내 */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <details className="group rounded-2xl border border-white/10 bg-neutral-950">
            <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between">
              <span className="font-semibold">프로그램 상세 안내</span>
              <span className="text-amber-400 text-xl transition group-open:rotate-45">
                +
              </span>
            </summary>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 px-6 pb-8 pt-2">
              {saclProgram.info.map((item) => (
                <div key={item.label}>
                  <dt className="text-amber-400 text-sm tracking-widest mb-2">
                    {item.label}
                  </dt>
                  <dd className="text-white/70 leading-relaxed text-sm">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </details>
        </div>
      </section>

      {/* 문의 안내 */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <p className="text-amber-400 text-sm tracking-widest mb-3">CONTACT</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          SACL 도입을 고민하고 계신가요?
        </h2>
        <p className="text-white/60 mb-8">
          대학·기관 맞춤 운영 방식과 도입 문의를 편하게 남겨주세요.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition"
        >
          도입 문의하기
        </Link>
      </section>

      <Footer />
    </main>
  );
}