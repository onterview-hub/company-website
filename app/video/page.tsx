import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&q=80`;

const services = [
  { slug: "lecture", title: "강의 영상 제작", desc: "몰입도 높은 교육 콘텐츠", img: "1497015289639-54688650d173" },
  { slug: "event", title: "행사·홍보 영상", desc: "현장감 있는 브랜드 메시지", img: "1612544409025-e1f6a56c1152" },
  { slug: "field-experience", title: "체험·현장실습 영상", desc: "다큐형 현장 기록", img: "1632187989763-c9c620420b4d" },
  { slug: "live", title: "라이브 스트리밍", desc: "안정적인 실시간 중계", img: "1574717024653-61fd2cf4d44d" },
  { slug: "web-drama", title: "웹드라마", desc: "이야기로 전하는 메시지", img: "1485846234645-a62644f84728" },
  { slug: "brand-film", title: "브랜드 필름", desc: "브랜드 철학의 영상화", img: "1553166272-e69910ab5ae1" },
  { slug: "interview-documentary", title: "인터뷰·다큐멘터리 영상", desc: "사람의 진짜 이야기", img: "1577190651915-bf62d54d5b36" },
  { slug: "social-content", title: "소셜미디어 콘텐츠 영상", desc: "짧고 강렬한 숏폼", img: "1528109966604-5a6a4a964e8d" },
  { slug: "internal-ir", title: "사내방송·IR 영상", desc: "내부 소통과 신뢰 구축", img: "1625690303837-654c9666d2d0" },
];

export default function VideoPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="video" />

      <section className="pt-40 pb-20 px-6 text-center border-b border-white/10 relative overflow-hidden">
        <Stars count={40} sparkleCount={4} />
        <div className="relative z-10">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            VIDEO PRODUCTION
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            이야기를 완성하는 영상
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            강의 영상부터 행사, 다큐멘터리, 웹드라마까지.
            스케치온은 기획부터 촬영, 편집까지 완성도 높은 영상을 제작합니다.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((item) => (
            <Link
              key={item.slug}
              href={`/video/${item.slug}`}
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
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
              <span className="text-white/30 group-hover:text-amber-400 shrink-0 transition">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          제작하고 싶은 영상이 있다면
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