import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

export default function Home() {
  const educationServices = [
    { slug: "ai", title: "AI 교육", desc: "생성형 AI 실무 활용", img: "artificial-intelligence,technology" },
    { slug: "career", title: "진로교육", desc: "자기이해와 방향 설계", img: "career,students" },
    { slug: "employment", title: "취업역량 강화교육", desc: "이력서·면접 실전 훈련", img: "job-interview,office" },
    { slug: "startup", title: "창업교육", desc: "아이디어를 사업으로", img: "startup,entrepreneur" },
    { slug: "job-creation", title: "창직교육", desc: "새로운 직업 설계", img: "creative-work,idea" },
    { slug: "corporate", title: "기업교육", desc: "조직 맞춤형 커리큘럼", img: "corporate-training,meeting" },
    { slug: "mandatory", title: "법정의무교육", desc: "필수 이수교육 지원", img: "office-seminar,compliance" },
    { slug: "leadership", title: "리더십·조직문화 교육", desc: "신뢰 기반 리더십", img: "leadership,teamwork" },
    { slug: "career-experience", title: "진로체험 프로그램", desc: "현장 중심 체험", img: "students-workshop,learning" },
  ];

  const videoServices = [
    { slug: "lecture", title: "강의 영상 제작", desc: "몰입도 높은 교육 콘텐츠", img: "online-lecture,studio" },
    { slug: "event", title: "행사·홍보 영상", desc: "현장감 있는 브랜드 메시지", img: "conference,event" },
    { slug: "field-experience", title: "체험·현장실습 영상", desc: "다큐형 현장 기록", img: "documentary,filming" },
    { slug: "live", title: "라이브 스트리밍", desc: "안정적인 실시간 중계", img: "live-streaming,broadcast" },
    { slug: "web-drama", title: "웹드라마", desc: "이야기로 전하는 메시지", img: "film-set,actors" },
    { slug: "brand-film", title: "브랜드 필름", desc: "브랜드 철학의 영상화", img: "camera,cinematic" },
    { slug: "interview-documentary", title: "인터뷰·다큐멘터리 영상", desc: "사람의 진짜 이야기", img: "interview,microphone" },
    { slug: "social-content", title: "소셜미디어 콘텐츠 영상", desc: "짧고 강렬한 숏폼", img: "smartphone-video,content" },
    { slug: "internal-ir", title: "사내방송·IR 영상", desc: "내부 소통과 신뢰 구축", img: "office-broadcast,presentation" },
  ];

  const references = [
    { slug: "sample-1", category: "교육", title: "OO기업 AI 리터러시 교육", img: "ai-classroom,training" },
    { slug: "sample-2", category: "영상", title: "OO기관 브랜드 필름 제작", img: "brand-video,production" },
    { slug: "sample-3", category: "교육", title: "OO대학교 진로체험 프로그램", img: "university,students" },
  ];

  return (
    <main className="bg-black text-white">
      <Header active="home" />

      {/* 히어로 섹션 */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?fm=jpg&q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
        <Stars count={70} />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {educationServices.map((item) => (
              <Link
                key={item.slug}
                href={`/education/${item.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/60 transition-all hover:-translate-y-1 bg-neutral-950"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${item.slug}/800/600`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {videoServices.map((item) => (
              <Link
                key={item.slug}
                href={`/video/${item.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/60 transition-all hover:-translate-y-1 bg-black"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/800x600/?${item.img}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </Link>
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

      {/* 레퍼런스 섹션 (카드 회전 애니메이션) */}
      <section
        id="reference"
        className="py-24 px-6 border-t border-white/10"
        style={{ perspective: "1200px" }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            REFERENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            스케치온의 발자취
          </h2>
          <p className="text-white/60 mb-12 max-w-2xl">
            교육과 영상제작, 다양한 현장에서 쌓아온 스케치온의 프로젝트를
            소개합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {references.map((item) => (
              <Link
                key={item.slug}
                href={`/reference/${item.slug}`}
                className="group [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(10deg)_rotateX(6deg)_scale(1.03)]"
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-400/60 transition shadow-lg group-hover:shadow-amber-400/10">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`https://source.unsplash.com/800x600/?${item.img}`}
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
          <Link
            href="/reference"
            className="inline-block text-amber-400 hover:underline"
          >
            레퍼런스 자세히 보기 →
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
          교육 및 영상제작 관련 문의는 언제든 편하게 남겨주세요.
        </p>
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