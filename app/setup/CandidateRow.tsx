"use client";

import { CheckCircle, Circle } from "@phosphor-icons/react";

/**
 * S002 할 일 후보 한 줄. 탭하면 선택/해제된다.
 * 선택 상태는 색뿐 아니라 체크 아이콘·굵기로도 구분한다(색만으로 표현 금지).
 */
export function CandidateRow({
  label,
  selected,
  onToggle,
}: {
  label: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-200 ease-out ${
        selected
          ? "border-primary-600 bg-primary-100"
          : "border-border bg-canvas hover:border-primary-300"
      }`}
    >
      {selected ? (
        <CheckCircle
          size={24}
          weight="fill"
          className="shrink-0 text-primary-600"
          aria-hidden
        />
      ) : (
        <Circle
          size={24}
          weight="regular"
          className="shrink-0 text-placeholder"
          aria-hidden
        />
      )}
      <span
        className={`text-[1rem] ${
          selected ? "font-semibold text-heading" : "text-strong"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
