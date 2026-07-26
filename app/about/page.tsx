import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "회사소개",
  description:
    "교육과 영상제작으로 다음 장면을 함께 그리는 스케치온을 소개합니다.",
};

export default function AboutPage() {
  const values = [
    {
      title: "SKETCH",
      desc: "정답이 없는 미래 앞에서, 스스로의 방향을 그릴 수 있도록 돕습니다.",
    },
    {
      title: "ON",
      desc: "생각에 머무르지 않고, 실제로 실행하고 만들어내는 것을 지향합니다.",
    },
    {
      title: "STORY",
      desc: "모든 교육과 영상에는 사람과 이야기가 있어야 한다고 믿습니다.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Header active="about" />

      <section className="pt-40 pb-20 px-6 text-center border-b border-white/10">
        <p className="text-amber-400 text-sm tracking-widest mb-3">ABOUT</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          스케치온을 소개합니다
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
          스케치온은 교육과 영상제작이라는 두 가지 언어로,
          <br className="hidden md:block" />
          사람과 조직이 다음 장면으로 나아갈 수 있도록 돕는 회사입니다.
        </p>
      </section>

      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-sm tracking-widest mb-4">
            MISSION
          </p>
          <h2 className="text-2xl md:text-4xl font-bold leading-relaxed">
            &quot;누구나 자신만의 다음 장면을
            <br />
            그려나갈 수 있도록&quot;
          </h2>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            CORE VALUE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            스케치온이 일하는 방식
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 rounded-2xl p-8 hover:border-amber-400/50 hover:bg-white/5 transition"
              >
                <h3 className="text-xl font-bold mb-3 text-amber-400 tracking-wider">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            COMPANY INFO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">회사 정보</h2>
          <div className="space-y-4 text-white/70">
            <p>
              <span className="text-white/40 mr-4">회사명</span>스케치온
              (SKETCH ON)
            </p>
            <p>
              <span className="text-white/40 mr-4">대표</span>신홍석
            </p>
            <p>
              <span className="text-white/40 mr-4">주소</span>
              서울특별시 관악구 조원로 25, 101-2705
            </p>
            <p>
              <span className="text-white/40 mr-4">사업자등록번호</span>
              330-31-01452
            </p>
            <p>
              <span className="text-white/40 mr-4">이메일</span>
              sketchon@sketchon.kr
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          스케치온과 함께할 준비가 되셨다면
        </h2>
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