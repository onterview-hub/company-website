import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

export const metadata = {
  title: "개인정보처리방침",
  description: "스케치온의 개인정보처리방침을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      <section className="pt-40 pb-16 px-6 text-center border-b border-white/10 relative overflow-hidden">
        <Stars count={40} sparkleCount={4} />
        <div className="relative z-10">
          <p className="text-amber-400 text-sm tracking-widest mb-3">
            PRIVACY POLICY
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            개인정보처리방침
          </h1>
          <p className="text-white/50 text-sm">시행일자: 2026년 7월 25일</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-white/70 leading-relaxed">
          <p>
            스케치온(이하 &quot;회사&quot;)은 이용자의 개인정보를 중요시하며,
            「개인정보보호법」 등 관련 법령을 준수하고 있습니다. 회사는
            본 개인정보처리방침을 통해 이용자가 제공하는 개인정보가 어떠한
            용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한
            조치가 취해지고 있는지 알려드립니다.
          </p>

          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-3">
              1. 수집하는 개인정보 항목 및 수집 방법
            </h2>
            <p className="mb-3">
              회사는 홈페이지 내 문의하기 서비스 이용을 위해 아래와 같은
              개인정보를 수집합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/60">
              <li>수집 항목: 이름, 연락처, 이메일 주소, 문의 내용</li>
              <li>수집 방법: 홈페이지 내 문의하기 폼을 통한 이용자 직접 입력</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-3">
              2. 개인정보의 수집 및 이용 목적
            </h2>
            <p>
              수집된 개인정보는 문의사항에 대한 답변 및 상담, 교육·영상제작
              서비스 안내를 위한 목적으로만 이용되며, 이용자의 동의 없이
              목적 범위를 초과하여 이용하지 않습니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-3">
              3. 개인정보의 보유 및 이용 기간
            </h2>
            <p>
              회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당
              정보를 지체 없이 파기합니다. 다만, 관계 법령의 규정에 의하여
              보존할 필요가 있는 경우 회사는 관계 법령에서 정한 일정한
              기간 동안 회원정보를 보관합니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-3">
              4. 개인정보의 제3자 제공
            </h2>
            <p>
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지
              않습니다. 다만, 이용자가 사전에 동의하거나 법령의 규정에
              의거한 경우는 예외로 합니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-3">
              5. 이용자의 권리와 행사 방법
            </h2>
            <p>
              이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제,
              처리정지를 요청할 수 있으며, 아래 연락처를 통해 요청하실 수
              있습니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-3">
              6. 개인정보 보호책임자
            </h2>
            <p>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
              개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을
              위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/60 mt-3">
              <li>성명: 신홍석</li>
              <li>이메일: sketchon@sketchon.kr</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-3">
              7. 개인정보처리방침의 변경
            </h2>
            <p>
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에
              따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의
              시행 7일 전부터 홈페이지를 통하여 고지할 것입니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}