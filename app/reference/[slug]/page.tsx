import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const references = [
  {
    slug: "sample-1",
    category: "교육",
    title: "가제) OO기업 AI 리터러시 교육",
    client: "가제) OO기업",
    period: "가제) 2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 전 직원 대상 AI 리터러시 향상을 목표로 진행된 교육으로, 실무 활용 사례 중심의 커리큘럼을 설계했습니다.",
    ],
    highlights: [
      "가제) 참여 인원 000명",
      "가제) 교육 만족도 00%",
      "가제) 진행 회차 0회",
    ],
  },
  {
    slug: "sample-2",
    category: "영상",
    title: "가제) OO기관 브랜드 필름 제작",
    client: "가제) OO기관",
    period: "가제) 2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 기관의 창립 이념과 비전을 담은 브랜드 필름으로, 기획부터 촬영, 편집까지 전 과정을 진행했습니다.",
    ],
    highlights: [
      "가제) 러닝타임 0분",
      "가제) 촬영 기간 0일",
      "가제) 공개 채널 유튜브 외",
    ],
  },
  {
    slug: "sample-3",
    category: "교육",
    title: "가제) OO대학교 진로체험 프로그램",
    client: "가제) OO대학교",
    period: "가제) 2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 재학생 대상 다양한 직업군 체험 프로그램을 기획 및 운영했습니다.",
    ],
    highlights: [
      "가제) 참여 인원 000명",
      "가제) 체험 직업군 0개",
      "가제) 운영 기간 0주",
    ],
  },
  {
    slug: "sample-4",
    category: "영상",
    title: "가제) OO기업 사내 교육 영상 제작",
    client: "가제) OO기업",
    period: "가제) 2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 신입사원 온보딩을 위한 사내 교육 콘텐츠를 시리즈로 제작했습니다.",
    ],
    highlights: [
      "가제) 콘텐츠 0편 제작",
      "가제) 활용 부서 0개 팀",
      "가제) 제작 기간 0개월",
    ],
  },
];

export function generateStaticParams() {
  return references.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = references.find((r) => r.slug === slug);
  return {
    title: item?.title ?? "레퍼런스",
    description: item?.description?.[0] ?? "스케치온의 프로젝트 사례를 소개합니다.",
  };
}

export default async function ReferenceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = references.find((r) => r.slug === slug);

  if (!item) return notFound();

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="reference" />

      <section className="pt-40 pb-16 px-6 text-center border-b border-white/10">
        <span className="inline-block text-xs px-3 py-1 border border-amber-400/40 text-amber-400 rounded-full mb-4">
          {item.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">{item.title}</h1>
        <p className="text-white/50 text-sm">
          {item.client} · {item.period}
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {item.description.map((p, i) => (
            <p key={i} className="text-white/70 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            HIGHLIGHT
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            프로젝트 하이라이트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {item.highlights.map((h) => (
              <div
                key={h}
                className="border border-white/10 rounded-xl px-5 py-6 text-center"
              >
                <span className="text-white/80">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          비슷한 프로젝트를 계획 중이신가요?
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition"
          >
            문의하기
          </Link>
          <Link
            href="/reference"
            className="inline-block px-8 py-3 border border-white/30 rounded-full hover:border-amber-400 hover:text-amber-400 transition"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}