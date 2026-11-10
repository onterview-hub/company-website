import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { saclProgram, saclCourses, saclLessons } from "@/app/sacl";
import type { SaclCourseKey } from "@/app/sacl";

export const metadata: Metadata = {
  title: "SACL 스케치온 AI CAREER LAB",
  description: saclProgram.headline,
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

// 과정별 소개 문구와 대표 사진
// 사진을 바꾸고 싶으면 img 값(사진 ID)만 교체하면 됩니다.
const courseMeta: Record<
  SaclCourseKey,
  { tagline: string; desc: string; img: string }
> = {
  career: {
    tagline: "나를 이해하고 방향을 정하는 시간",
    desc: "강점 분석부터 커리어 로드맵, 실행계획까지 AI와 함께 진로를 설계합니다.",
    img: "1781331756173-386c128d6f92",
  },
  job: {
    tagline: "서류부터 면접까지, 합격 전략 완성",
    desc: "채용공고 분석, 자기소개서, 이력서, 포트폴리오, 모의면접까지 취업 준비 전 과정을 다룹니다.",
    img: "1598978458053-d740c5aae5d6",
  },
  startup: {
    tagline: "아이디어를 사업계획으로",
    desc: "창업 아이템 발굴부터 시장조사, 사업계획서, 피칭까지 AI로 구체화합니다.",
    img: "1521737852567-6949f3f9f2b5",
  },
  newjob: {
    tagline: "새로운 직업을 직접 설계",
    desc: "신직업 탐색부터 서비스·수익모델 설계, 실행계획까지 나만의 일자리를 만듭니다.",
    img: "1758873272412-7166447a94ae",
  },
  digital: {
    tagline: "일 잘하는 사람의 AI 활용법",
    desc: "보고서, 엑셀, 회의록, 프로젝트 관리, 직장 내 소통과 AI 윤리·보안까지 익힙니다.",
    img: "1690079374922-7f50d5c1a102",
  },
};

export default function SaclPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="home" />

      {/* 상단 소개 */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?fm=jpg&q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-5">
            {saclProgram.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            AI로 설계하는
            <br />
            <span className="text-amber-400">진로·취업·창업·창직</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-8">
            {saclProgram.headline}
          </p>
          <p className="text-white/80 mb-10">
            <span className="text-amber-400 font-semibold">48강</span> ·{" "}
            <span className="text-amber-400 font-semibold">24시간</span> ·{" "}
            <span className="text-amber-400 font-semibold">5개 과정</span>
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#curriculum"
              className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition"
            >
              강의 둘러보기
            </a>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/30 rounded-full hover:border-amber-400 hover:text-amber-400 transition"
            >
              도입 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* 과정 안내 카드 + 상세 안내 */}
      <section id="curriculum" className="scroll-mt-24 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            CURRICULUM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            5개 과정, 48강
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl">
            관심 있는 과정을 눌러 해당 강의로 바로 이동해 보세요.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {saclCourses.map((course) => {
              const meta = courseMeta[course.key];
              return (
                <a
                  key={course.key}
                  href={`#${course.key}`}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/60 transition"
                >
                  <img
                    src={unsplash(meta.img)}
                    alt={course.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="text-amber-400 text-xs tracking-widest mb-1">
                      {course.count}강
                    </p>
                    <p className="font-bold leading-snug">{course.name}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* 접어두는 상세 안내 */}
          <details className="group rounded-2xl border border-white/10 bg-neutral-950">
            <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between">
              <span className="font-semibold">프로그램 상세 안내</span>
              <span className="text-amber-400 text-xl transition group-open:rotate-45">
                +
              </span>
            </summary>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 px-6 pb-8 pt-2">
              {saclProgram.info.map((item) => (
                <div key={item.label}>
                  <dt className="text-amber-400 text-sm tracking-widest mb-2">
                    {item.label}
                  </dt>
                  <dd className="text-white/70 leading-relaxed text-sm">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </details>
        </div>
      </section>

      {/* 과정별 강의 구역 */}
      {saclCourses.map((course, idx) => {
        const lessons = saclLessons.filter((l) => l.course === course.key);
        const first = lessons[0]?.no;
        const last = lessons[lessons.length - 1]?.no;
        const meta = courseMeta[course.key];

        return (
          <section
            key={course.key}
            id={course.key}
            className={`scroll-mt-24 py-20 px-6 border-t border-white/10 ${
              idx % 2 === 0 ? "bg-neutral-950" : ""
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <p className="text-amber-400 text-sm tracking-widest mb-3">
                  {String(idx + 1).padStart(2, "0")} · {first}~{last}강
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {course.name}
                </h2>
                <p className="text-amber-400/90 font-semibold mb-2">
                  {meta.tagline}
                </p>
                <p className="text-white/60 max-w-2xl">{meta.desc}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
                {lessons.map((lesson) => (
                  <Link
                    key={lesson.no}
                    href={`/sacl/${lesson.no}`}
                    className="group block"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:border-amber-400/60 transition">
                      <img
                        src={
                          lesson.youtubeId
                            ? `https://img.youtube.com/vi/${lesson.youtubeId}/hqdefault.jpg`
                            : unsplash(meta.img)
                        }
                        alt={lesson.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                      <span className="absolute left-3 bottom-2 text-3xl font-bold text-amber-400">
                        {String(lesson.no).padStart(2, "0")}
                      </span>
                      {lesson.youtubeId ? (
                        <span className="absolute right-3 bottom-3 w-9 h-9 rounded-full bg-amber-400 text-black flex items-center justify-center text-sm">
                          ▶
                        </span>
                      ) : (
                        <span className="absolute right-3 top-3 text-xs px-3 py-1 rounded-full bg-black/60 text-white/70">
                          준비 중
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-sm md:text-base font-semibold leading-snug line-clamp-2 group-hover:text-amber-400 transition">
                      {lesson.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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