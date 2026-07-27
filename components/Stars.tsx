"use client";

import { useMemo } from "react";

const TINTS = [
  "255,255,255",
  "180,210,255",
  "255,200,230",
];

export default function Stars({
  count = 60,
  sparkleCount = 6,
}: {
  count?: number;
  sparkleCount?: number;
}) {
  const dots = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, [count]);

  const sparkles = useMemo(() => {
    return Array.from({ length: sparkleCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 14 + 16,
      duration: Math.random() * 2.5 + 3.5,
      delay: Math.random() * 4,
      tint: TINTS[i % TINTS.length],
    }));
  }, [sparkleCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 작은 먼지 별들 */}
      {dots.map((s) => (
        <span
          key={`dot-${s.id}`}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: 0.5,
            animation: `sketchon-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* 반짝이는 별 (부드러운 방사형 광채) */}
      {sparkles.map((s) => (
        <div
          key={`sparkle-${s.id}`}
          className="absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size * 5}px`,
            height: `${s.size * 5}px`,
            marginLeft: `-${(s.size * 5) / 2}px`,
            marginTop: `-${(s.size * 5) / 2}px`,
            animation: `sketchon-sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          {/* 방사형 후광 */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(${s.tint},0.55) 0%, rgba(${s.tint},0.15) 35%, transparent 70%)`,
            }}
          />
          {/* 얇고 뾰족한 별 */}
          <svg
            viewBox="0 0 100 100"
            className="absolute top-1/2 left-1/2"
            style={{
              width: `${s.size}px`,
              height: `${s.size}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <path
              d="M50 0 C51.5 40 60 48.5 100 50 C60 51.5 51.5 60 50 100 C48.5 60 40 51.5 0 50 C40 48.5 48.5 40 50 0 Z"
              fill={`rgba(${s.tint},1)`}
            />
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes sketchon-twinkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3);
          }
        }
        @keyframes sketchon-sparkle {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}