import type { ReactNode } from "react";
import type { Metadata } from "next";

// 완성 전까지 검색엔진에 노출되지 않도록 설정합니다.
// 공개할 준비가 되면 아래 robots 줄을 삭제하면 됩니다.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function SaclLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}