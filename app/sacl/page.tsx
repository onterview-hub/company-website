import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { saclProgram } from "@/app/sacl";
import LessonList from "./LessonList";

export const metadata: Metadata = {
  title: "SACL 스케치온 AI CAREER LAB",
  description: saclProgram.headline,
};

export default function SaclPage() {
  const stats = [
    { value: "48강", label: "전체 강의" },
    { value: "24시간", label: "총 교육 시간" },
    { value: "5과정", label: "진로·취업·창업·창직·디지털 업무" },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="home" />

      {/* 프로그램 소개 */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">
            {saclProgram.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            AI로 설계하는
            <br />
            <span className="text-amber-400">진로·취업·창업·창직</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-12">
            {saclProgram.headline}
          </p>

          {/* 숫자 요약 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-2xl border border-white/10 bg-neutral-950 p-6"
              >
                <p className="text-3xl font-bold text-amber-400 mb-1">
                  {s.value}
                </p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          {/* 프로그램 상세 정보 */}
          <div className="rounded-2xl border border-white/10 bg-neutral-950 p-6 md:p-8">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {saclProgram.info.map((item) => (
                <div key={item.label}>
                  <dt className="text-amber-400 text-sm tracking-widest mb-2">
                    {item.label}
                  </dt>
                  <dd className="text-white/80 leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 강의 목록 */}
      <section className="py-20 px-6 border-t border-white/10 bg-neutral-950/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            CURRICULUM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            48강 교육과정
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl">
            강의마다 1분 미만의 소개 영상을 확인할 수 있어요. 카드를 눌러
            강의별 내용과 결과물을 살펴보세요.
          </p>
          <LessonList />
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