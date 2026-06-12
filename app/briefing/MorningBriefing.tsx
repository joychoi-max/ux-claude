"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CaretDown, Coffee, Star } from "@phosphor-icons/react";
import { MobileFrame } from "../components/MobileFrame";

// 더미 데이터 (docs/DESIGN.md 더미 데이터 가이드)
const FOCUS = ["회사 보고서 마무리", "오후 강의 준비", "논문 인터뷰 정리"];
const REST = ["메일 회신", "일정 정리", "자료 조사", "운동"];
const SPOON = [
  { tag: "AI", line: "요즘은 보고서 초안을 LLM으로 먼저 뽑는 팀이 늘고 있어요." },
  { tag: "주식", line: "관심 종목은 장 초반 강보합이에요. 천천히 보셔도 돼요." },
];

export function MorningBriefing() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [restOpen, setRestOpen] = useState(false);

  // 압축하는 순간 — 잠깐 정리하는 모습을 보여준 뒤 핵심을 드러낸다
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MobileFrame>
      <main className="flex flex-1 flex-col px-7 pb-9 pt-8">
        {/* Header: 🌅 시간대 + 럭키 브리핑 멘트 */}
        <header className="flex flex-col gap-2.5">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-[1.625rem] leading-none"
            role="img"
            aria-label="해돋이, 아침"
          >
            🌅
          </span>
          <h1 className="text-[1.5rem] font-bold leading-[1.36] tracking-tight text-heading">
            윤정님, 오늘 이렇게 가요
          </h1>
          <p className="text-[0.9375rem] leading-[1.5] text-body">
            흩어져 있던 일을 핵심 3개로 모아봤어요.
          </p>
        </header>

        {loading ? (
          <div aria-live="polite" className="mt-7 flex flex-1 flex-col gap-3">
            <p className="px-0.5 text-[0.875rem] text-meta">
              오늘 거, 핵심만 추리고 있어요.
            </p>
            <div className="h-[188px] rounded-[var(--radius-card)] bg-surface-40 animate-pulse" />
            <div className="h-[52px] rounded-2xl bg-surface-40 animate-pulse" />
            <div className="h-[96px] rounded-2xl bg-surface-40 animate-pulse" />
          </div>
        ) : (
          <div className="mt-7 flex flex-1 flex-col gap-3">
            {/* 핵심 3개 — 가장 강한 위계 */}
            <section className="rounded-[var(--radius-card)] border border-border bg-canvas p-6">
              <div className="flex items-center gap-1.5">
                <Star size={18} weight="fill" className="text-primary-600" aria-hidden />
                <h2 className="text-[0.9375rem] font-semibold text-strong">
                  오늘 꼭 이 3개
                </h2>
              </div>
              <ol className="mt-4 flex flex-col gap-4">
                {FOCUS.map((label, index) => (
                  <li key={label} className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-600 text-[0.875rem] font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-[1.1875rem] font-semibold leading-snug text-heading">
                      {label}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* 나머지 할 일 — 버린 게 아니라 접어둔 (아코디언) */}
            <section className="overflow-hidden rounded-2xl border border-border bg-canvas">
              <button
                type="button"
                onClick={() => setRestOpen((open) => !open)}
                aria-expanded={restOpen}
                className="flex w-full items-center justify-between px-5 py-3.5 text-left transition-colors duration-200 ease-out hover:bg-surface-10"
              >
                <span className="text-[0.9375rem] font-medium text-body">
                  나머지 할 일 {REST.length}개
                </span>
                <CaretDown
                  size={18}
                  weight="bold"
                  aria-hidden
                  className={`text-meta transition-transform duration-200 ease-out ${
                    restOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {restOpen ? (
                <div className="border-t border-border px-5 pb-4 pt-3">
                  <p className="pb-2 text-[0.8125rem] text-meta">
                    버린 게 아니라 잠시 접어뒀어요.
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {REST.map((label) => (
                      <li
                        key={label}
                        className="flex items-center gap-2.5 text-[0.9375rem] text-body"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-border"
                          aria-hidden
                        />
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>

            {/* 정보 한 스푼 — 포커스를 흐리지 않는 보조 */}
            <section className="rounded-2xl bg-surface-40 p-4">
              <div className="flex items-center gap-1.5 pb-2.5">
                <Coffee size={16} weight="regular" className="text-meta" aria-hidden />
                <span className="text-[0.8125rem] font-semibold text-meta">
                  한 스푼
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {SPOON.map((item) => (
                  <li key={item.tag} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 rounded-full bg-canvas px-2 py-0.5 text-[0.6875rem] font-semibold text-meta">
                      {item.tag}
                    </span>
                    <span className="text-[0.875rem] leading-[1.5] text-body">
                      {item.line}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

        {/* Footer: 시작 CTA */}
        <div className="mt-6">
          <button
            type="button"
            disabled={loading}
            onClick={() => router.push("/home")}
            className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-control)] bg-primary-600 px-5 py-4 text-[1.0625rem] font-semibold text-white transition-colors duration-200 ease-out hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-border disabled:text-placeholder"
          >
            좋아, 시작하자
            {loading ? null : <ArrowRight size={18} weight="bold" aria-hidden />}
          </button>
        </div>
      </main>
    </MobileFrame>
  );
}
