import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const references = [
  {
    slug: "sample-1",
    category: "교육",
    title: "OO기업 취업캠프",
    img: "1598978458053-d740c5aae5d6",
    client: "OO기업",
    period: "2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 신입/경력 채용 대비 취업캠프를 기획하여 이력서 작성, 모의면접, 직무 이해 교육을 진행했습니다.",
    ],
    highlights: ["참여 인원 000명", "만족도 00%", "진행 회차 0회"],
  },
  {
    slug: "sample-2",
    category: "교육",
    title: "OO기관 진로특강",
    img: "1781331756173-386c128d6f92",
    client: "OO기관",
    period: "2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 청소년 대상 진로특강을 통해 다양한 직업군에 대한 이해를 돕고 진로 설계를 지원했습니다.",
    ],
    highlights: ["참여 학생 000명", "특강 0회", "만족도 00%"],
  },
  {
    slug: "sample-3",
    category: "교육",
    title: "OO기업 AI 리터러시 교육",
    img: "1690079374922-7f50d5c1a102",
    client: "OO기업",
    period: "2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 전 직원 대상 AI 리터러시 향상을 목표로 진행된 교육으로, 실무 활용 사례 중심의 커리큘럼을 설계했습니다.",
    ],
    highlights: ["참여 인원 000명", "교육 만족도 00%", "진행 회차 0회"],
  },
  {
    slug: "sample-4",
    category: "교육",
    title: "OO대학교 창업워크숍",
    img: "1521737852567-6949f3f9f2b5",
    client: "OO대학교",
    period: "2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 창업 동아리 대상 비즈니스 모델 설계 워크숍을 진행하고 사업계획서 컨설팅을 제공했습니다.",
    ],
    highlights: ["참여 팀 0개", "워크숍 0회", "만족도 00%"],
  },
  {
    slug: "sample-5",
    category: "영상",
    title: "OO기관 홍보영상 제작",
    img: "1612544409025-e1f6a56c1152",
    client: "OO기관",
    period: "2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 기관 소개 및 사업 홍보를 위한 영상을 기획부터 촬영, 편집까지 전 과정 진행했습니다.",
    ],
    highlights: ["러닝타임 0분", "촬영 기간 0일", "공개 채널 유튜브 외"],
  },
  {
    slug: "sample-6",
    category: "영상",
    title: "OO기업 교육영상 제작",
    img: "1497015289639-54688650d173",
    client: "OO기업",
    period: "2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 사내 직무교육용 강의 영상을 시리즈로 제작하여 온라인 학습 플랫폼에 탑재했습니다.",
    ],
    highlights: ["콘텐츠 0편 제작", "촬영 기간 0주", "활용 부서 0개 팀"],
  },
  {
    slug: "sample-7",
    category: "교육",
    title: "OO대학교 진로체험 프로그램",
    img: "1659080910507-bd9d7f3787f3",
    client: "OO대학교",
    period: "2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 재학생 대상 다양한 직업군 체험 프로그램을 기획 및 운영했습니다.",
    ],
    highlights: ["참여 인원 000명", "체험 직업군 0개", "운영 기간 0주"],
  },
  {
    slug: "sample-8",
    category: "교육",
    title: "OO기관 협업 프로젝트",
    img: "1675434301763-594b4d0c5819",
    client: "OO기관",
    period: "2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 지역 기관과 협업하여 청년 대상 커리어 프로그램을 공동 기획 및 운영했습니다.",
    ],
    highlights: ["협업 기관 0곳", "참여 인원 000명", "프로그램 0회"],
  },
  {
    slug: "sample-9",
    category: "영상",
    title: "OO기관 현장실습 영상",
    img: "1632187989763-c9c620420b4d",
    client: "OO기관",
    period: "2026.00 ~ 2026.00",
    description: [
      "이 영역에는 실제 프로젝트의 배경과 목표, 진행 과정에 대한 상세 설명이 들어갈 예정입니다.",
      "예: 현장실습 프로그램의 생생한 현장을 다큐멘터리 형식으로 기록하여 성과 보고 자료로 활용했습니다.",
    ],
    highlights: ["촬영 일수 0일", "참여 인원 000명", "결과보고 영상 제작"],
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

      <section className="pt-40 pb-16 px-6 text-center border-b border-white/10 relative overflow-hidden">
        <Stars count={40} sparkleCount={4} />
        <div className="relative z-10">
          <span className="inline-block text-xs px-3 py-1 border border-amber-400/40 text-amber-400 rounded-full mb-4">
            {item.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{item.title}</h1>
          <p className="text-white/50 text-sm">
            {item.client} · {item.period}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
            <img
              src={unsplash(item.img)}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-6">
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