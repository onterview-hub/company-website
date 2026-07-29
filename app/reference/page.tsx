import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

export const metadata = {
  title: "레퍼런스",
  description: "스케치온이 함께해온 교육 및 영상제작 프로젝트를 소개합니다.",
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

const references = [
  { slug: "sample-1", category: "교육", title: "OO기업 취업캠프", img: "1598978458053-d740c5aae5d6" },
  { slug: "sample-2", category: "교육", title: "OO기관 진로특강", img: "1781331756173-386c128d6f92" },
  { slug: "sample-3", category: "교육", title: "OO기업 AI 리터러시 교육", img: "1690079374922-7f50d5c1a102" },
  { slug: "sample-4", category: "교육", title: "OO대학교 창업워크숍", img: "1521737852567-6949f3f9f2b5" },
  { slug: "sample-5", category: "영상", title: "OO기관 홍보영상 제작", img: "1612544409025-e1f6a56c1152" },
  { slug: "sample-6", category: "영상", title: "OO기업 교육영상 제작", img: "1497015289639-54688650d173" },
  { slug: "sample-7", category: "교육", title: "OO대학교 진로체험 프로그램", img: "1659080910507-bd9d7f3787f3" },
  { slug: "sample-8", category: "교육", title: "OO기관 협업 프로젝트", img: "1675434301763-594b4d0c5819" },
  { slug: "sample-9", category: "영상", title: "OO기관 현장실습 영상", img: "1632187989763-c9c620420b4d" },
];

export default function ReferencePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="reference" />

      <section className="pt-40 pb-20 px-6 text-center border-b border-white/10 relative overflow-hidden">
        <Stars count={40} sparkleCount={4} />
        <div className="relative z-10">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            REFERENCE
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            스케치온의 발자취
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            교육과 영상제작, 다양한 현장에서 쌓아온 스케치온의 프로젝트를
            소개합니다. (현재는 예시 데이터이며, 추후 실제 사례로 교체될
            예정입니다)
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ perspective: "1200px" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((item) => (
            <Link
              key={item.slug}
              href={`/reference/${item.slug}`}
              className="group [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(10deg)_rotateX(6deg)_scale(1.03)]"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-400/60 transition shadow-lg group-hover:shadow-amber-400/10">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={unsplash(item.img)}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 bg-neutral-950">
                  <span className="inline-block text-xs px-3 py-1 border border-amber-400/40 text-amber-400 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-bold">{item.title}</h3>
                </div>
              </div>
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