import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

export const metadata = {
  title: "영상제작서비스",
  description:
    "강의영상, 행사·홍보영상, 브랜드필름, 웹드라마 등 스케치온의 영상제작 서비스를 소개합니다.",
};

export default function VideoPage() {
  const services = [
    { slug: "lecture", title: "강의 영상 제작" },
    { slug: "event", title: "행사·홍보 영상" },
    { slug: "field-experience", title: "체험·현장실습 영상" },
    { slug: "live", title: "라이브 스트리밍" },
    { slug: "web-drama", title: "웹드라마" },
    { slug: "brand-film", title: "브랜드 필름" },
    { slug: "interview-documentary", title: "인터뷰·다큐멘터리 영상" },
    { slug: "social-content", title: "소셜미디어 콘텐츠 영상" },
    { slug: "internal-ir", title: "사내방송·IR 영상" },
  ];

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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <Link
              key={item.slug}
              href={`/video/${item.slug}`}
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