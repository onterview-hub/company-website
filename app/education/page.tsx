import Link from "next/link";
import Header from "@/components/Header";

export default function EducationPage() {
  const services = [
    { slug: "ai", title: "AI 교육" },
    { slug: "career", title: "진로교육" },
    { slug: "employment", title: "취업역량 강화교육" },
    { slug: "startup", title: "창업교육" },
    { slug: "job-creation", title: "창직교육" },
    { slug: "corporate", title: "기업교육" },
    { slug: "mandatory", title: "법정의무교육" },
    { slug: "leadership", title: "리더십·조직문화 교육" },
    { slug: "career-experience", title: "진로체험 프로그램" },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="education" />

      <section className="pt-40 pb-20 px-6 text-center border-b border-white/10">
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
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <Link
              key={item.slug}
              href={`/education/${item.slug}`}
              className="border border-white/10 rounded-2xl p-8 hover:border-amber-400/50 hover:bg-white/5 transition flex items-center justify-between"
            >
              <h3 className="text-xl font-bold text-amber-400">
                {item.title}
              </h3>
              <span className="text-white/40">→</span>
            </Link>
          ))}
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

      <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} SKETCH ON. All rights reserved.
      </footer>
    </main>
  );
}