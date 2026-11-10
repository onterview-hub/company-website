"use client";

import { useState } from "react";
import Link from "next/link";
import { saclCourses, saclLessons } from "@/app/sacl";
import type { SaclCourseKey } from "@/app/sacl";

type TabKey = "all" | SaclCourseKey;

export default function LessonList() {
  const [active, setActive] = useState<TabKey>("all");

  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: "all", label: "전체", count: saclLessons.length },
    ...saclCourses.map((c) => ({
      key: c.key as TabKey,
      label: c.name,
      count: c.count,
    })),
  ];

  const courseName = (key: SaclCourseKey) =>
    saclCourses.find((c) => c.key === key)?.name ?? "";

  const visible =
    active === "all"
      ? saclLessons
      : saclLessons.filter((l) => l.course === active);

  return (
    <div>
      {/* 과정 탭 */}
      <div className="flex flex-wrap gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={
              active === tab.key
                ? "px-5 py-2 rounded-full bg-amber-400 text-black font-semibold text-sm"
                : "px-5 py-2 rounded-full border border-white/20 text-white/70 hover:border-amber-400 hover:text-amber-400 transition text-sm"
            }
          >
            {tab.label} {tab.count}
          </button>
        ))}
      </div>

      {/* 강의 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((lesson) => (
          <Link
            key={lesson.no}
            href={`/sacl/${lesson.no}`}
            className="group rounded-2xl border border-white/10 hover:border-amber-400/60 transition-all hover:-translate-y-1 bg-neutral-950 p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-amber-400 text-sm tracking-widest">
                LESSON {String(lesson.no).padStart(2, "0")}
              </span>
              <span className="text-xs px-3 py-1 border border-amber-400/40 text-amber-400 rounded-full">
                {courseName(lesson.course)}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-amber-400 transition">
              {lesson.title}
            </h3>
            <p className="text-white/50 text-sm mb-5">
              결과물 · {lesson.output}
            </p>
            <p className="mt-auto text-xs text-white/40">
              {lesson.youtubeId ? "▶ 영상 보기" : "영상 준비 중"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}