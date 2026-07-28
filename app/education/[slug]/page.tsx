import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

const services = [
  {
    slug: "ai",
    title: "AI 교육",
    summary: "AI를 이해하고, 실무에 바로 쓰는 힘을 기릅니다.",
    img: "artificial-intelligence,classroom",
    description: [
      "AI는 이제 특정 전문가만의 영역이 아닙니다. 스케치온의 AI 교육은 생성형 AI의 기본 원리부터 실무 활용법까지, 비전공자도 부담 없이 따라올 수 있도록 설계되어 있습니다.",
      "단순 이론 강의가 아니라, 실제 업무에 AI 도구를 적용해보는 실습 중심으로 진행하여 교육 직후 바로 활용할 수 있는 역량을 갖추게 합니다. 대상과 수준에 맞춰 기초 이해부터 프로젝트 실습까지 단계별로 구성합니다.",
    ],
    features: [
      "생성형 AI 기초 이해",
      "직무별 AI 도구 실습",
      "프롬프트 작성법",
      "AI 윤리 및 리스크 관리",
      "데이터 기반 사고와 AI 활용",
      "AI 시대의 문제해결 사고법",
      "업무 자동화 기초",
      "AI 윤리와 올바른 활용 방법",
    ],
    audience: ["일반 임직원", "학생 및 취업준비생", "AI 입문자", "시니어"],
  },
  {
    slug: "career",
    title: "진로교육",
    summary: "정답이 아닌, 자신만의 방향을 찾는 여정.",
    img: "career,students",
    description: [
      "진로는 하나의 정답을 찾는 과정이 아니라, 자신을 이해하고 세상과 연결하는 과정입니다. 스케치온의 진로교육은 학생과 청년들이 스스로 질문하고 답을 찾아가도록 돕습니다.",
      "적성 탐색부터 진로 설계, 목표 수립까지 단계별 프로그램으로 구성되어 있으며, 대상의 연령과 상황에 맞춘 맞춤형 진행이 가능합니다.",
    ],
    features: [
      "자기이해 및 적성 탐색 워크숍",
      "직업군별 정보 탐색 프로그램",
      "개인별 진로 설계 컨설팅",
      "진로 로드맵 수립 워크북",
      "진로 의사결정 전략",
      "전공 기반 진로 탐색",
      "직업인 인터뷰 연계",
      "진로 가치관 정립",
    ],
    audience: ["중·고등학생", "대학생", "진로 전환 희망자"],
  },
  {
    slug: "employment",
    title: "취업역량 강화교육",
    summary: "이력서부터 면접까지, 실전 취업 역량을 완성합니다.",
    img: "job-interview,office",
    description: [
      "취업 준비는 정보력과 실전 감각의 싸움입니다. 스케치온은 이력서 작성, 자기소개서, 면접까지 취업 전 과정을 실전처럼 훈련합니다.",
      "직무별 맞춤 컨설팅과 모의면접을 통해 실제 채용 현장에서 통하는 역량을 길러드리며, 채용 트렌드 분석을 바탕으로 최신 기준에 맞춘 커리큘럼을 제공합니다.",
    ],
    features: [
      "이력서·자기소개서 첨삭 컨설팅",
      "직무 중심 면접 대비",
      "실전 모의면접 클리닉",
      "채용 트렌드 분석",
      "인적성·직무적성 준비",
      "기업 분석 실전 훈련",
      "취업 브랜딩 전략",
      "취업 이미지 메이킹",
    ],
    audience: ["취업준비생", "졸업예정자", "이직 준비자", "특성화고 학생"],
  },
  {
    slug: "startup",
    title: "창업교육",
    summary: "아이디어를 사업으로, 사업을 성장으로.",
    img: "startup,entrepreneur",
    description: [
      "창업은 아이디어만으로 완성되지 않습니다. 스케치온의 창업교육은 사업 아이템 발굴부터 사업계획서 작성, 실행 전략까지 창업의 전 과정을 함께합니다.",
      "실제 창업 사례와 시장 데이터를 기반으로 한 실전형 커리큘럼으로 구성되어 있으며, 정부지원사업 및 투자 유치 관련 실무 정보도 함께 안내합니다.",
    ],
    features: [
      "비즈니스 모델 설계 워크숍",
      "사업계획서 작성 컨설팅",
      "시장 분석 및 아이템 검증",
      "투자 유치 및 정부지원사업 안내",
      "창업 아이디어 구체화 코칭",
      "재무·수익 구조 설계",
      "브랜딩·마케팅 기초",
      "창업 실전 사례 분석",
    ],
    audience: ["예비 창업자", "초기 스타트업", "창업 동아리", "대학생"],
  },
  {
    slug: "job-creation",
    title: "창직교육",
    summary: "없던 직업을, 스스로 만들어내는 힘.",
    img: "creative-work,idea",
    description: [
      "빠르게 변화하는 시대, 기존 직업만으로는 미래를 준비하기 어렵습니다. 창직교육은 자신의 강점과 사회적 니즈를 연결해 새로운 직업을 스스로 설계하는 역량을 기릅니다.",
      "실제 창직 사례 분석과 워크숍을 통해, 관념이 아닌 실행 가능한 창직 아이디어로 발전시킵니다.",
    ],
    features: [
      "창직 개념 및 사례 학습",
      "강점 기반 직업 설계 워크숍",
      "사회 트렌드와 니즈 분석",
      "창직 아이디어 구체화 코칭",
      "1인 창작자·프리랜서 모델 설계",
      "포트폴리오 전략 수립",
      "자기 브랜딩 전략",
      "제2의 인생 찾기 (경력 전환)",
    ],
    audience: ["청년", "경력 전환 희망자", "1인 창작자", "시니어"],
  },
  {
    slug: "corporate",
    title: "기업교육",
    summary: "조직의 성장을 위한, 맞춤형 임직원 교육.",
    img: "corporate-training,meeting",
    description: [
      "기업마다 필요한 역량과 과제는 다릅니다. 스케치온의 기업교육은 조직 진단을 바탕으로, 해당 기업에 꼭 맞는 커리큘럼을 설계해드립니다.",
      "직무교육부터 조직문화, 리더십까지 다양한 주제를 기업의 상황에 맞게 유연하게 구성하며, 사전 협의를 통해 신입사원부터 관리자까지 계층별 트랙을 제안합니다.",
    ],
    features: [
      "조직 니즈 진단 및 커리큘럼 설계",
      "직무별 맞춤 교육 프로그램",
      "신입사원 성장 과정",
      "관리자 집중 트랙",
      "승진자 리더 과정",
      "세대 맞춤 소통 과정",
      "현장 밀착형 워크숍",
      "성과 연계 교육 설계",
    ],
    audience: ["중소·중견기업", "공공기관", "스타트업"],
  },
  {
    slug: "mandatory",
    title: "법정의무교육",
    summary: "필수 이수교육을, 놓치지 않고 정확하게.",
    img: "office-seminar,training",
    description: [
      "성희롱예방교육, 개인정보보호교육 등 법정 필수 이수교육을 놓치지 않도록 체계적으로 지원합니다. 형식적인 교육이 아닌, 실제 조직 문화 개선에 도움이 되는 방식으로 진행합니다.",
      "온라인, 오프라인, 하이브리드 등 조직 상황에 맞는 다양한 운영 방식을 제공합니다.",
    ],
    features: [
      "직장 내 성희롱 예방교육",
      "개인정보보호 실무",
      "청렴·컴플라이언스 교육",
      "직장 내 괴롭힘 예방",
      "직무 스트레스 관리",
      "건강한 직장문화 만들기",
      "조직 윤리와 책임",
      "직장인 기본 소양",
    ],
    audience: ["전 사업장", "공공기관", "법정 의무 대상 기업"],
  },
  {
    slug: "leadership",
    title: "리더십·조직문화 교육",
    summary: "건강한 조직을 만드는, 사람 중심의 리더십.",
    img: "leadership,teamwork",
    description: [
      "좋은 조직문화는 좋은 리더십에서 시작됩니다. 스케치온의 리더십·조직문화 교육은 구성원 간 신뢰와 소통을 바탕으로 한 건강한 조직을 만드는 데 초점을 둡니다.",
      "실제 조직 사례를 기반으로 한 워크숍과 코칭을 통해, 이론이 아닌 현장에서 바로 적용 가능한 리더십을 기릅니다.",
    ],
    features: [
      "변화주도 리더십",
      "코칭 리더의 기술",
      "공감형·신뢰기반 리더십",
      "동기부여 전략",
      "팀 시너지 구축",
      "세대 통합 팀워크",
      "조직 몰입도 향상",
      "갈등관리와 조정 기술",
    ],
    audience: ["팀장·관리자", "신임 리더", "조직문화 담당자"],
  },
  {
    slug: "career-experience",
    title: "진로체험 프로그램",
    summary: "직접 보고, 듣고, 경험하는 진로탐색.",
    img: "students-workshop,learning",
    description: [
      "백 번 듣는 것보다 한 번의 경험이 진로를 바꿉니다. 스케치온의 진로체험 프로그램은 다양한 직업군의 현장을 직접 체험하며 실질적인 진로 탐색 기회를 제공합니다.",
      "직업인 인터뷰, 현장 방문, 실습형 체험 등 다양한 방식으로 프로그램을 구성하며, 학교·기관 단위 단체 프로그램 운영도 가능합니다.",
    ],
    features: [
      "직업인 인터뷰 및 특강",
      "현장 방문 및 체험형 프로그램",
      "직업군별 체험 워크숍",
      "체험 후 진로 설계 연계",
      "학교생활 리더십 연계",
      "공동체 의식 강화",
      "긍정 마인드셋 형성",
      "책임감과 자기관리 훈련",
    ],
    audience: ["중·고등학생", "대학생", "학교 및 기관 단체"],
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
    title: service?.title ?? "교육서비스",
    description: service?.summary ?? "스케치온의 교육 서비스를 소개합니다.",
  };
}

export default async function EducationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="education" />

      <section className="pt-40 pb-16 px-6 text-center border-b border-white/10 relative overflow-hidden">
        <Stars count={40} sparkleCount={4} />
        <div className="relative z-10">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            EDUCATION
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
              src={`https://picsum.photos/seed/${service.slug}/1200/675`}
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
            PROGRAM
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
            href="/education"
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