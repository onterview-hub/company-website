import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const services = [
  {
    slug: "lecture",
    title: "강의 영상 제작",
    summary: "몰입도 높은 온라인 강의 콘텐츠를 만듭니다.",
    img: "1497015289639-54688650d173",
    description: [
      "온라인 교육의 완성도는 영상 퀄리티에서 갈립니다. 스케치온은 강사의 메시지가 명확하게 전달되도록 촬영 구성부터 편집, 자막까지 꼼꼼하게 제작합니다.",
      "단순 녹화가 아닌, 학습 몰입도를 높이는 시각 자료와 편집 기법을 함께 적용하며, 챕터 구성과 목차 삽입까지 교육 콘텐츠에 최적화된 방식으로 완성합니다.",
    ],
    features: [
      "스튜디오·현장 촬영",
      "자막 및 그래픽 자료 편집",
      "챕터별 구성 및 목차 삽입",
      "온라인 강의·VOD 포맷 납품",
      "슬라이드·판서 합성 편집",
      "강사 인터뷰형 촬영",
      "학습 자료 연계 편집",
      "다국어 자막 지원",
    ],
    audience: ["교육기관", "기업 사내교육 담당자", "1인 강사"],
  },
  {
    slug: "event",
    title: "행사·홍보 영상",
    summary: "행사의 순간을, 브랜드의 메시지로.",
    img: "1612544409025-e1f6a56c1152",
    description: [
      "행사는 순간이지만, 영상은 남습니다. 스케치온은 기업 행사, 세미나, 컨퍼런스의 현장감을 살리면서도 브랜드 메시지를 효과적으로 전달하는 영상을 제작합니다.",
      "현장 촬영부터 하이라이트 편집까지, 행사 목적에 맞는 최적의 결과물을 제공하며 SNS 확산용 클립까지 함께 준비합니다.",
    ],
    features: [
      "행사 현장 다각도 촬영",
      "하이라이트 및 요약 영상 편집",
      "인터뷰 및 참가자 후기 촬영",
      "SNS용 숏폼 클립 제작",
      "무대·현수막 연출 촬영",
      "당일 스케치 영상 즉시 제작",
      "행사 전 티저 영상",
      "다국어 자막·더빙",
    ],
    audience: ["기업 행사 담당자", "지자체·공공기관", "협회·단체"],
  },
  {
    slug: "field-experience",
    title: "체험·현장실습 영상",
    summary: "현장의 생생함을 그대로 담습니다.",
    img: "1632187989763-c9c620420b4d",
    description: [
      "현장실습이나 체험 프로그램의 가치는 그 생생함에 있습니다. 스케치온은 다큐멘터리 형식의 촬영 기법으로 현장의 분위기와 참여자의 변화를 진솔하게 담아냅니다.",
      "교육적 효과를 높이는 인터뷰 구성과 스토리텔링을 함께 적용하며, 성과 보고용 자료로도 활용 가능한 결과물을 제공합니다.",
    ],
    features: [
      "다큐멘터리형 현장 촬영",
      "참여자 인터뷰 구성",
      "교육 효과 중심 스토리텔링",
      "실습 성과 보고용 영상",
      "체험 전후 비교 구성",
      "현장 소음 대응 녹음",
      "장기 프로젝트 정기 촬영",
      "결과보고서 연계 편집",
    ],
    audience: ["교육기관", "직업체험 프로그램 운영기관", "지자체"],
  },
  {
    slug: "live",
    title: "라이브 스트리밍",
    summary: "끊김 없는 실시간 중계, 전문 장비로.",
    img: "1574717024653-61fd2cf4d44d",
    description: [
      "실시간 방송은 안정성이 생명입니다. 스케치온은 전문 장비와 숙련된 인력으로 행사, 세미나, 온라인 발표회 등의 라이브 스트리밍을 안정적으로 지원합니다.",
      "유튜브, 자체 플랫폼 등 다양한 채널 송출을 지원하며, 다중 카메라 스위칭과 이중 백업 시스템으로 방송 사고를 예방합니다.",
    ],
    features: [
      "다중 카메라 실시간 스위칭",
      "유튜브·자체 플랫폼 동시 송출",
      "실시간 자막 및 그래픽 삽입",
      "방송 사고 대비 이중 백업",
      "실시간 채팅·Q&A 연동",
      "온오프라인 하이브리드 중계",
      "다시보기(VOD) 즉시 제공",
      "방송 리허설 사전 점검",
    ],
    audience: ["기업 행사", "컨퍼런스·세미나 주최자", "온라인 발표회"],
  },
  {
    slug: "web-drama",
    title: "웹드라마",
    summary: "브랜드 메시지를, 이야기로 전달합니다.",
    img: "1485846234645-a62644f84728",
    description: [
      "직접적인 광고보다 이야기가 더 오래 기억됩니다. 스케치온은 브랜드나 기관이 전하고 싶은 메시지를 자연스러운 스토리로 풀어내는 웹드라마를 기획·제작합니다.",
      "기획, 시나리오, 캐스팅, 촬영, 편집까지 전 과정을 원스톱으로 제공하며, 에피소드형 시리즈 구성도 가능합니다.",
    ],
    features: [
      "스토리 기획 및 시나리오 작성",
      "캐스팅 및 촬영 진행",
      "브랜드 메시지 자연스러운 삽입",
      "에피소드형 시리즈 제작",
      "로케이션 헌팅",
      "OST·사운드 디자인",
      "예고편·티저 제작",
      "SNS 유통용 편집본 제공",
    ],
    audience: ["브랜드 마케팅 담당자", "교육기관 홍보팀", "공공기관 캠페인"],
  },
  {
    slug: "brand-film",
    title: "브랜드 필름",
    summary: "브랜드의 정체성을, 영상으로 완성합니다.",
    img: "1553166272-e69910ab5ae1",
    description: [
      "브랜드 필름은 단순 소개 영상이 아니라, 브랜드의 철학과 감성을 전달하는 작품입니다. 스케치온은 기업의 가치와 이야기를 감각적인 영상 언어로 표현합니다.",
      "기획 단계에서부터 브랜드의 톤앤매너를 깊이 이해하고, 이를 영상 전반에 일관되게 반영하며 다양한 러닝타임 버전으로 제작합니다.",
    ],
    features: [
      "브랜드 스토리 기획",
      "감성적 영상미 연출",
      "기업 소개·채용·IR 활용",
      "다양한 러닝타임 버전 제작",
      "임직원 인터뷰 삽입",
      "드론·특수 촬영",
      "컬러그레이딩·후반작업",
      "브랜드 가이드라인 반영 편집",
    ],
    audience: ["기업 브랜드 담당자", "스타트업", "공공기관 홍보실"],
  },
  {
    slug: "interview-documentary",
    title: "인터뷰·다큐멘터리 영상",
    summary: "사람과 이야기를, 깊이 있게 담아냅니다.",
    img: "1577190651915-bf62d54d5b36",
    description: [
      "가장 힘 있는 콘텐츠는 사람의 진짜 이야기입니다. 스케치온은 인물 인터뷰와 다큐멘터리 형식을 통해 깊이 있는 메시지를 전달하는 영상을 제작합니다.",
      "사전 인터뷰 구성부터 촬영, 편집까지 신뢰를 바탕으로 한 진솔한 결과물을 만듭니다.",
    ],
    features: [
      "사전 인터뷰 구성 및 질문지 설계",
      "인물 중심 다큐멘터리 촬영",
      "내레이션 및 스토리 편집",
      "기업·기관 사례 영상",
      "장기 관찰형 촬영",
      "아카이브 자료 활용 편집",
      "감성 배경음악 구성",
      "자막·인터뷰 스크립트 정리",
    ],
    audience: ["기업 사례 홍보 담당자", "공공기관", "비영리단체"],
  },
  {
    slug: "social-content",
    title: "소셜미디어 콘텐츠 영상",
    summary: "짧고 강렬하게, 채널에 맞게.",
    img: "1528109966604-5a6a4a964e8d",
    description: [
      "SNS는 짧은 시간 안에 메시지를 전달해야 합니다. 스케치온은 유튜브 쇼츠, 릴스, 틱톡 등 각 채널의 특성에 맞는 숏폼 콘텐츠를 기획·제작합니다.",
      "트렌드를 반영한 편집과 후킹 포인트 설계로 콘텐츠의 확산력을 높이며, 정기 콘텐츠 제작 패키지도 운영합니다.",
    ],
    features: [
      "채널별 맞춤 포맷 기획",
      "숏폼 트렌드 반영 편집",
      "정기 콘텐츠 제작 패키지",
      "썸네일 및 자막 디자인",
      "후킹 인트로 설계",
      "밈·트렌드 챌린지 활용",
      "채널 그로스 전략 컨설팅",
      "라이브커머스 연계 촬영",
    ],
    audience: ["마케팅 담당자", "1인 브랜드·크리에이터", "교육기관 SNS 운영자"],
  },
  {
    slug: "internal-ir",
    title: "사내방송·IR 영상",
    summary: "내부 소통과 투자자 신뢰를 위한 영상.",
    img: "1625690303837-654c9666d2d0",
    description: [
      "조직 내부의 소통과 외부 투자자와의 신뢰 구축, 모두 영상으로 더 효과적으로 전달할 수 있습니다. 스케치온은 사내방송 콘텐츠부터 IR용 기업 소개 영상까지 목적에 맞게 제작합니다.",
      "정확한 정보 전달과 신뢰감 있는 톤앤매너를 바탕으로 기획하며, 정기 사내방송 콘텐츠 운영도 지원합니다.",
    ],
    features: [
      "사내소식·행사 영상 제작",
      "CEO 메시지 영상",
      "IR·투자유치용 기업소개",
      "정기 사내방송 콘텐츠",
      "재무·성과 데이터 시각화",
      "임직원 인터뷰 시리즈",
      "사내 캠페인 홍보 영상",
      "다국어 버전 제작",
    ],
    audience: ["기업 홍보·인사팀", "스타트업 대표", "IR 담당자"],
  },
];

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service?.title ?? "영상제작서비스",
    description: service?.summary ?? "스케치온의 영상제작 서비스를 소개합니다.",
  };
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="video" />

      <section className="pt-40 pb-16 px-6 text-center border-b border-white/10 relative overflow-hidden">
        <Stars count={40} sparkleCount={4} />
        <div className="relative z-10">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            VIDEO PRODUCTION
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">{service.summary}</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
            <img
              src={unsplash(service.img)}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {service.description.map((p, i) => (
            <p key={i} className="text-white/70 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            PROCESS
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            프로그램 주제
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.features.map((f) => (
              <span
                key={f}
                className="px-4 py-2 rounded-full border border-white/15 text-white/80 text-sm hover:border-amber-400/50 hover:text-amber-400 transition"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            RECOMMENDED FOR
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            이런 분들께 추천합니다
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.audience.map((a) => (
              <span
                key={a}
                className="px-5 py-2 border border-amber-400/40 text-amber-400 rounded-full text-sm"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {service.title}, 스케치온과 함께 시작하세요
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition"
          >
            문의하기
          </Link>
          <Link
            href="/video"
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