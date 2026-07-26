import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const references = [
  {
    slug: "sample-1",
    category: "교육",
    title: "가제) OO기업 AI 리터러시 교육",
    summary: "추후 실제 프로젝트 내용으로 교체 예정입니다.",
  },
  {
    slug: "sample-2",
    category: "영상",
    title: "가제) OO기관 브랜드 필름 제작",
    summary: "추후 실제 프로젝트 내용으로 교체 예정입니다.",
  },
  {
    slug: "sample-3",
    category: "교육",
    title: "가제) OO대학교 진로체험 프로그램",
    summary: "추후 실제 프로젝트 내용으로 교체 예정입니다.",
  },
  {
    slug: "sample-4",
    category: "영상",
    title: "가제) OO기업 사내 교육 영상 제작",
    summary: "추후 실제 프로젝트 내용으로 교체 예정입니다.",
  },
];

export default function ReferencePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="reference" />

      <section className="pt-40 pb-20 px-6 text-center border-b border-white/10">
        <p className="text-amber-400 text-sm tracking-widest mb-3">
          REFERENCE
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          스케치온의 발자취
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          교육과 영상제작, 다양한 현장에서 쌓아온 스케치온의 프로젝트를
          소개합니다.
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((item) => (
            <Link
              key={item.slug}
              href={`/reference/${item.slug}`}
              className="border border-white/10 rounded-2xl p-8 hover:border-amber-400/50 hover:bg-white/5 transition"
            >
              <span className="inline-block text-xs px-3 py-1 border border-amber-400/40 text-amber-400 rounded-full mb-4">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          스케치온과 함께할 다음 프로젝트를 기다립니다
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