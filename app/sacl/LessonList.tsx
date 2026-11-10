"use client";

import { useState } from "react";
import Link from "next/link";
import { saclCourses, saclLessons } from "@/app/sacl";
import type { SaclCourseKey } from "@/app/sacl";

type TabKey = "all" | SaclCourseKey;

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&q=80`;

// 과정별 한 줄 소개와 대표 사진
// 사진을 바꾸고 싶으면 img 값(사진 ID)만 교체하면 됩니다.
const courseMeta: Record<
  SaclCourseKey,
  { label: string; tagline: string; img: string }
> = {
  career: {
    label: "진로",
    tagline: "나를 이해하고 방향을 정하는 시간",
    img: "1781331756173-386c128d6f92",
  },
  job: {
    label: "취업",
    tagline: "서류부터 면접까지, 합격 전략 완성",
    img: "1598978458053-d740c5aae5d6",
  },
  startup: {
    label: "창업",
    tagline: "아이디어를 사업계획으로",
    img: "1521737852567-6949f3f9f2b5",
  },
  newjob: {
    label: "창직",
    tagline: "새로운 직업을 직접 설계",
    img: "1758873272412-7166447a94ae",
  },
  digital: {
    label: "디지털 업무",
    tagline: "일 잘하는 사람의 AI 활용법",
    img: "1690079374922-7f50d5c1a102",
  },
};

export default function LessonList() {
  const [active, setActive] = useState<TabKey>("all");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "all", label: "전체" },
    ...saclCourses.map((c) => ({
      key: c.key as TabKey,
      label: courseMeta[c.key].label,
    })),
  ];

  const visibleCourses =
    active === "all"
      ? saclCourses
      : saclCourses.filter((c) => c.key === active);

  return (
    <div>
      {/* 과정 탭 */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={
              active === tab.key
                ? "px-6 py-2 rounded-full bg-amber-400 text-black font-semibold"
                : "px-6 py-2 rounded-full border border-white/20 text-white/80 hover:border-amber-400 hover:text-amber-400 transition"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 과정별 구역 */}
      <div className="space-y-14">
        {visibleCourses.map((course) => {
          const meta = courseMeta[course.key];
          const lessons = saclLessons.filter((l) => l.course === course.key);

          return (
            <div key={course.key}>
              <div className="mb-5 px-1">
                <h2 className="text-xl md:text-2xl font-bold">
                  {meta.label}{" "}
                  <span className="text-amber-400 text-base font-semibold">
                    {course.count}강
                  </span>
                </h2>
                <p className="text-white/50 text-sm mt-1">{meta.tagline}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {lessons.map((lesson) => (
                  <Link
                    key={lesson.no}
                    href={`/sacl/${lesson.no}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-950 p-4 hover:border-amber-400/60 transition"
                  >
                    <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={
                          lesson.youtubeId
                            ? `https://img.youtube.com/vi/${lesson.youtubeId}/hqdefault.jpg`
                            : unsplash(meta.img)
                        }
                        alt={lesson.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold leading-snug mb-1 group-hover:text-amber-400 transition">
                        <span className="text-amber-400 mr-2">
                          {String(lesson.no).padStart(2, "0")}
                        </span>
                        {lesson.title}
                      </h3>
                      <p className="text-white/50 text-sm mb-2 truncate">
                        결과물 · {lesson.output}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-2.5 py-0.5 rounded-full border border-white/20 text-white/60">
                          {meta.label}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full border border-white/20 text-white/60">
                          {lesson.youtubeId ? "영상 있음" : "영상 준비 중"}
                        </span>
                      </div>
                    </div>

                    <span className="text-white/40 group-hover:text-amber-400 transition shrink-0">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}