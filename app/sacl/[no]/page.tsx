import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { saclLessons, saclCourses } from "@/app/sacl";

type Props = { params: Promise<{ no: string }> };

function findLesson(no: string) {
  const n = Number(no);
  return saclLessons.find((l) => l.no === n);
}

export function generateStaticParams() {
  return saclLessons.map((l) => ({ no: String(l.no) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { no } = await params;
  const lesson = findLesson(no);
  if (!lesson) return { title: "SACL" };
  return {
    title: `${lesson.no}강 ${lesson.title} | SACL`,
    description: lesson.summary,
  };
}

export default async function SaclLessonPage({ params }: Props) {
  const { no } = await params;
  const lesson = findLesson(no);
  if (!lesson) notFound();

  const courseName =
    saclCourses.find((c) => c.key === lesson.course)?.name ?? "";
  const prev = saclLessons.find((l) => l.no === lesson.no - 1);
  const next = saclLessons.find((l) => l.no === lesson.no + 1);
  const lessonNo = String(lesson.no).padStart(2, "0");

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="home" />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* 위치 표시 */}
          <p className="text-white/40 text-sm mb-6">
            <span className="text-amber-400">SACL</span> · {courseName} 과정
          </p>

          {/* 강의 번호와 제목 */}
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            LESSON {lessonNo}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
            {lesson.title}
          </h1>

          {/* 영상 영역 */}
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 mb-10">
            {lesson.youtubeId ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${lesson.youtubeId}`}
                title={`${lesson.no}강 ${lesson.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
                <p className="text-amber-400 tracking-[0.3em] text-sm mb-3">
                  COMING SOON
                </p>
                <p className="text-white/60">영상 준비 중입니다.</p>
              </div>
            )}
          </div>

          {/* 주요 내용과 결과물 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 rounded-2xl border border-white/10 bg-neutral-950 p-6">
              <p className="text-amber-400 text-sm tracking-widest mb-3">
                주요 내용
              </p>
              <p className="text-white/80 leading-relaxed">{lesson.summary}</p>
            </div>
            <div className="rounded-2xl border border-amber-400/30 bg-neutral-950 p-6">
              <p className="text-amber-400 text-sm tracking-widest mb-3">
                주요 결과물
              </p>
              <p className="text-white/80 leading-relaxed">{lesson.output}</p>
            </div>
          </div>

          {/* 이전·다음 강의 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {prev ? (
              <Link
                href={`/sacl/${prev.no}`}
                className="rounded-2xl border border-white/10 hover:border-amber-400/60 transition p-5"
              >
                <p className="text-white/40 text-xs mb-1">← 이전 강의</p>
                <p className="font-semibold">
                  {prev.no}강 {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/sacl/${next.no}`}
                className="rounded-2xl border border-white/10 hover:border-amber-400/60 transition p-5 sm:text-right"
              >
                <p className="text-white/40 text-xs mb-1">다음 강의 →</p>
                <p className="font-semibold">
                  {next.no}강 {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* 문의 안내 */}
          <div className="text-center border-t border-white/10 pt-12">
            <p className="text-white/60 mb-6">
              SACL 도입 및 교육 문의는 언제든 남겨주세요.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition"
            >
              도입 문의하기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}