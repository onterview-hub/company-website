import Link from "next/link";

export default function VideoPage() {
  const services = [
    {
      title: "강의 영상 제작",
      desc: "온라인 강의, 교육 콘텐츠를 위한 전문 촬영 및 편집",
    },
    {
      title: "행사·홍보 영상",
      desc: "기업 행사, 세미나, 브랜드 홍보를 위한 임팩트 있는 영상",
    },
    {
      title: "체험·현장실습 영상",
      desc: "실습 현장의 생생한 순간을 담는 다큐멘터리형 영상",
    },
    {
      title: "라이브 스트리밍",
      desc: "실시간 행사 중계 및 온라인 라이브 방송 운영",
    },
    {
      title: "웹드라마",
      desc: "브랜드 메시지를 담은 스토리텔링 웹드라마 제작",
    },
    {
      title: "브랜드 필름",
      desc: "기업과 브랜드의 정체성을 담은 감성적인 브랜드 필름",
    },
    {
      title: "인터뷰·다큐멘터리 영상",
      desc: "인물과 이야기를 깊이 있게 담아내는 인터뷰/다큐 영상",
    },
    {
      title: "소셜미디어 콘텐츠 영상",
      desc: "숏폼 등 SNS 채널에 최적화된 콘텐츠 영상",
    },
    {
      title: "사내방송·IR 영상",
      desc: "내부 커뮤니케이션 및 투자자 대상 IR 영상 제작",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* 상단 네비게이션 */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-widest">
            SKETCH<span className="text-amber-400">ON</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm text-white/80">
            <Link href="/education" className="hover:text-amber-400 transition">
              교육서비스
            </Link>
            <Link href="/video" className="text-amber-400">
              영상제작서비스
            </Link>
            <Link href="/about" className="hover:text-amber-400 transition">
              회사소개
            </Link>
            <Link href="/#contact" className="hover:text-amber-400 transition">
              문의하기
            </Link>
          </nav>
        </div>
      </header>

      {/* 헤더 영역 */}
      <section className="pt-40 pb-20 px-6 text-center border-b border-white/10">
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
      </section>

      {/* 서비스 목록 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-2xl p-8 hover:border-amber-400/50 hover:bg-white/5 transition"
            >
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {item.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          제작하고 싶은 영상이 있다면
        </h2>
        <Link
          href="/#contact"
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