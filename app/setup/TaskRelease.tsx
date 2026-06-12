"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Plus, Tag, X } from "@phosphor-icons/react";
import { MobileFrame } from "../components/MobileFrame";
import { CandidateRow } from "./CandidateRow";

type Candidate = { id: string; label: string; selected: boolean };

// 더미 데이터 — 역할 기반 후보 (docs/DESIGN.md 더미 데이터 가이드)
const ROLE_BASED = [
  "회사 보고서 마무리",
  "오후 강의 준비",
  "논문 인터뷰 정리",
  "메일 회신",
  "일정 정리",
  "자료 조사",
  "운동",
];

// 역할 미입력(빈 상태)에서도 럭키가 먼저 까는 일반 후보
const GENERIC = [
  "오늘 가장 급한 일 하나",
  "미뤄둔 일 정리하기",
  "오후 약속·일정 확인",
  "읽으려던 자료 보기",
  "잠깐 산책이나 휴식",
];

function buildInitial(hasRole: boolean): Candidate[] {
  const base = hasRole ? ROLE_BASED : GENERIC;
  const preChecked = hasRole ? 2 : 1; // 럭키가 핵심 후보를 먼저 체크해 둠
  return base.map((label, index) => ({
    id: `c-${index}`,
    label,
    selected: index < preChecked,
  }));
}

export function TaskRelease() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = (searchParams.get("role") ?? "").trim();
  const hasRole = role.length > 0;

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Candidate[]>(() => buildInitial(hasRole));
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState("");

  // 제안 준비 — 스켈레톤을 잠깐 보여준 뒤 후보를 깐다
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const selectedCount = useMemo(
    () => items.filter((item) => item.selected).length,
    [items],
  );

  function toggle(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  }

  function addCustom() {
    const label = draft.trim();
    if (!label) return;
    setItems((prev) => [
      ...prev,
      { id: `custom-${Date.now()}`, label, selected: true },
    ]);
    setDraft("");
    setAdding(false);
  }

  const canProceed = selectedCount > 0;

  return (
    <MobileFrame>
      <main className="flex flex-1 flex-col px-7 pb-9 pt-8">
        {/* Header: 럭키 제안 멘트 */}
        <header className="flex flex-col gap-2.5">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-[1.625rem] leading-none"
            role="img"
            aria-label="네잎클로버, 럭키"
          >
            🍀
          </span>
          <h1 className="text-[1.5rem] font-bold leading-[1.36] tracking-tight text-heading">
            {hasRole ? "이런 것들 있으실까요?" : "무엇부터 챙길까요?"}
          </h1>
          {hasRole ? (
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-surface-40 px-2.5 py-1 text-[0.8125rem] font-medium text-body">
              <Tag size={14} weight="fill" className="text-meta" aria-hidden />
              {role}
            </span>
          ) : null}
          <p className="text-[0.9375rem] leading-[1.5] text-body">
            {hasRole
              ? "하루를 보고 몇 개 깔아뒀어요. 고르거나 빼고, 없는 건 더해주세요."
              : "제가 몇 개 제안해드릴게요. 마음에 드는 걸 고르거나 더해주세요."}
          </p>
        </header>

        {/* Main: 후보 리스트 (로딩 / 선택) */}
        <div className="mt-7 flex flex-1 flex-col gap-2.5">
          {loading ? (
            <div aria-live="polite" className="flex flex-col gap-2.5">
              <p className="px-0.5 pb-0.5 text-[0.875rem] text-meta">
                잠깐만요, 오늘 거 같이 정리할게요.
              </p>
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[54px] rounded-2xl bg-surface-40 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <>
              {items.map((item) => (
                <CandidateRow
                  key={item.id}
                  label={item.label}
                  selected={item.selected}
                  onToggle={() => toggle(item.id)}
                />
              ))}

              {/* 직접 추가하기 */}
              {adding ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={(event) => event.key === "Enter" && addCustom()}
                    placeholder="직접 추가할 일"
                    autoFocus
                    className="min-w-0 flex-1 rounded-2xl border border-border bg-canvas px-4 py-3 text-[1rem] text-heading placeholder:text-placeholder transition-colors duration-200 ease-out focus:border-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-100"
                  />
                  <button
                    type="button"
                    onClick={addCustom}
                    className="shrink-0 rounded-2xl bg-primary-600 px-4 py-3 text-[0.9375rem] font-semibold text-white transition-colors duration-200 ease-out hover:bg-primary-700"
                  >
                    추가
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAdding(false);
                      setDraft("");
                    }}
                    aria-label="추가 취소"
                    className="shrink-0 rounded-full p-2 text-meta transition-colors duration-200 ease-out hover:bg-surface-40"
                  >
                    <X size={20} aria-hidden />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setAdding(true)}
                  className="flex w-full items-center gap-3 rounded-2xl border border-dashed border-border bg-transparent px-4 py-3.5 text-left text-strong transition-colors duration-200 ease-out hover:border-primary-300"
                >
                  <Plus
                    size={24}
                    weight="bold"
                    className="shrink-0 text-primary-600"
                    aria-hidden
                  />
                  <span className="text-[1rem]">직접 추가하기</span>
                </button>
              )}
            </>
          )}
        </div>

        {/* Footer: 전진 CTA (선택 0개면 비활성) */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <button
            type="button"
            disabled={!canProceed}
            onClick={() => router.push("/briefing")}
            className={`flex w-full items-center justify-center gap-2 rounded-[var(--radius-control)] px-5 py-4 text-[1.0625rem] font-semibold transition-colors duration-200 ease-out ${
              canProceed
                ? "bg-primary-600 text-white hover:bg-primary-700"
                : "cursor-not-allowed bg-border text-placeholder"
            }`}
          >
            이걸로 정리해줘
            {canProceed ? <ArrowRight size={18} weight="bold" aria-hidden /> : null}
          </button>
          <p className="text-[0.8125rem] text-meta">
            {canProceed
              ? `${selectedCount}개 골랐어요. 핵심 3개로 정리해드릴게요.`
              : "하나만 골라도 충분해요."}
          </p>
        </div>
      </main>
    </MobileFrame>
  );
}
