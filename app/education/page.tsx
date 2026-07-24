import Link from "next/link";

export default function EducationPage() {
  const services = [
    {
      title: "AI 교육",
      desc: "AI 기초 이해부터 실무 활용까지, 눈높이에 맞춘 AI 리터러시 교육",
    },
    {
      title: "진로교육",
      desc: "학생과 청년들이 자신만의 방향을 찾을 수 있도록 돕는 맞춤형 진로설계 프로그램",
    },
    {
      title: "취업역량 강화교육",
      desc: "이력서, 면접, 직무역량까지 취업 현장에 필요한 실전 역량 교육",
    },
    {
      title: "창업교육",
      desc: "아이디어를 사업으로 만드는 창업 기초부터 실행 전략까지",
    },
    {
      title: "창직교육",
      desc: "기존에 없던 새로운 직업을 스스로 만들어가는 창직 역량 교육",
    },
    {
      title: "기업교육",
      desc: "조직의 성장을 위한 맞춤형 임직원 교육 프로그램",
    },
    {
      title: "법정의무교육",
      desc: "성희롱예방, 개인정보보호 등 법정 필수 이수교육",
    },
    {
      title: "리더십·조직문화 교육",
      desc: "건강한 조직문화를 만드는 리더십 및 커뮤니케이션 교육",
    },
    {
      title: "진로체험 프로그램",
      desc: "다양한 직업군 체험을 통한 실질적인 진로탐색 프로그램",
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
            <Link href="/education" className="text-amber-400">
              교육서비스
            </Link>
            <Link href="/video" className="hover:text-amber-400 transition">
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
          우리 조직에 맞는 교육이 궁금하다면
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