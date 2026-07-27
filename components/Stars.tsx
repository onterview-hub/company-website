"use client";

import { useMemo } from "react";

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
      size: Math.random() * 14 + 18,
      duration: Math.random() * 2 + 3,
      delay: Math.random() * 4,
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

      {/* 반짝이는 별(SVG) */}
      {sparkles.map((s) => (
        <svg
          key={`sparkle-${s.id}`}
          viewBox="0 0 100 100"
          className="absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `sketchon-sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          <path
            d="M50 0 C53 35 65 47 100 50 C65 53 53 65 50 100 C47 65 35 53 0 50 C35 47 47 35 50 0 Z"
            fill="white"
          />
        </svg>
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
            opacity: 0.25;
            transform: scale(0.6) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
}