import Link from "next/link";

export default function Home() {
  const educationServices = [
    "AI 교육",
    "진로교육",
    "취업역량 강화교육",
    "창업교육",
    "창직교육",
    "기업교육",
    "법정의무교육",
    "리더십·조직문화 교육",
    "진로체험 프로그램",
  ];

  const videoServices = [
    "강의 영상 제작",
    "행사·홍보 영상",
    "체험·현장실습 영상",
    "라이브 스트리밍",
    "웹드라마",
    "브랜드 필름",
    "인터뷰·다큐멘터리 영상",
    "소셜미디어 콘텐츠 영상",
    "사내방송·IR 영상",
  ];

  return (
    <main className="bg-black text-white">
      {/* 상단 네비게이션 */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-widest">
            SKETCH<span className="text-amber-400">ON</span>
          </span>
          <nav className="hidden md:flex gap-8 text-sm text-white/80">
            <Link href="/education" className="hover:text-amber-400 transition">
              교육서비스
            </Link>
            <Link href="/video" className="hover:text-amber-400 transition">
              영상제작서비스
            </Link>
            <a href="#contact" className="hover:text-amber-400 transition">
              문의하기
            </a>
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900" />
        <div className="relative z-10">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-6">
            SKETCH ON
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            당신의 다음 장면을,
            <br />
            <span className="text-amber-400">스케치하다</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10">
            교육으로 방향을 그리고, 영상으로 이야기를 완성합니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/education"
              className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition"
            >
              교육서비스 보기
            </Link>
            <Link
              href="/video"
              className="px-8 py-3 border border-white/30 rounded-full hover:border-amber-400 hover:text-amber-400 transition"
            >
              영상제작서비스 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 교육서비스 섹션 */}
      <section id="education" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            EDUCATION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            미래를 설계하는 교육
          </h2>
          <p className="text-white/60 mb-12 max-w-2xl">
            AI 시대, 진로부터 취업, 창업, 창직, 기업교육까지.
            스케치온은 변화하는 시대에 맞는 실질적인 교육을 제공합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {educationServices.map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-xl px-5 py-6 hover:border-amber-400/50 hover:bg-white/5 transition"
              >
                <span className="text-white/90 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Link
            href="/education"
            className="inline-block text-amber-400 hover:underline"
          >
            교육서비스 자세히 보기 →
          </Link>
        </div>
      </section>

      {/* 영상제작서비스 섹션 */}
      <section id="video" className="py-24 px-6 border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            VIDEO PRODUCTION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            이야기를 완성하는 영상
          </h2>
          <p className="text-white/60 mb-12 max-w-2xl">
            강의 영상부터 행사, 다큐멘터리, 웹드라마까지.
            스케치온은 기획부터 촬영, 편집까지 완성도 높은 영상을 제작합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {videoServices.map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-xl px-5 py-6 hover:border-amber-400/50 hover:bg-white/5 transition"
              >
                <span className="text-white/90 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Link
            href="/video"
            className="inline-block text-amber-400 hover:underline"
          >
            영상제작서비스 자세히 보기 →
          </Link>
        </div>
      </section>

      {/* 문의하기 섹션 */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center">
        <p className="text-amber-400 text-sm tracking-widest mb-3">CONTACT</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          함께 만들어갈 이야기를 기다립니다
        </h2>
        <p className="text-white/60 mb-8">
          교육 및 영상제작 관련 문의는 아래 연락처로 부탁드립니다.
        </p>
        <p className="text-white/80">이메일: info@sketchon.co.kr</p>
      </section>

      {/* 푸터 */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} SKETCH ON. All rights reserved.
      </footer>
    </main>
  );
}