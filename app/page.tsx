"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "@phosphor-icons/react";
import { MobileFrame } from "./components/MobileFrame";

export default function FirstMeetingScreen() {
  const [role, setRole] = useState("");
  const trimmedRole = role.trim();
  const hasRole = trimmedRole.length > 0;
  const setupHref = hasRole
    ? `/setup?role=${encodeURIComponent(trimmedRole)}`
    : "/setup";

  return (
    <MobileFrame>
      <main className="flex flex-1 flex-col px-7 pb-9 pt-4">
        {/* 본문: 럭키 인사 + 역할 입력 (세로 중앙) */}
        <div className="flex flex-1 flex-col justify-center gap-9">
          {/* 럭키 시그니처 + 인사 */}
          <div className="flex flex-col items-center text-center">
            <span
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-[2.75rem] leading-none"
              role="img"
              aria-label="네잎클로버, 럭키"
            >
              🍀
            </span>
            <h1 className="mt-6 text-[1.75rem] font-bold leading-[1.36] tracking-tight text-heading">
              안녕하세요,
              <br />
              저는 럭키예요
            </h1>
            <p className="mt-3 text-[1.0625rem] leading-[1.5] text-body">
              오늘부터 아침·낮·저녁
              <br />
              하루를 같이 챙길게요.
            </p>
          </div>

          {/* 역할 입력 (선택) */}
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="role"
              className="text-[0.9375rem] font-semibold text-strong"
            >
              먼저, 어떤 하루를 보내세요?
            </label>
            <input
              id="role"
              type="text"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder="예: 회사 일, 강의, 논문…"
              autoComplete="off"
              className="w-full rounded-[var(--radius-control)] border border-border bg-canvas px-4 py-3.5 text-[1rem] text-heading placeholder:text-placeholder transition-colors duration-200 ease-out focus:border-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-100"
            />
            <p className="px-0.5 text-[0.8125rem] leading-[1.5] text-meta">
              {hasRole
                ? "좋아요. 이걸 보고 럭키가 오늘 할 일을 골라둘게요."
                : "안 적어도 괜찮아요. 적어주시면 더 잘 골라드릴 수 있어요."}
            </p>
          </div>
        </div>

        {/* 액션: 단일 primary CTA + 안심 보조 문구 */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <Link
            href={setupHref}
            className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-control)] bg-primary-600 px-5 py-4 text-[1.0625rem] font-semibold text-white transition-colors duration-200 ease-out hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-100"
          >
            럭키랑 시작하기
            <ArrowRight size={18} weight="bold" aria-hidden />
          </Link>
          <p className="flex items-center gap-1.5 text-[0.8125rem] text-meta">
            <ShieldCheck size={16} weight="fill" className="text-primary" aria-hidden />
            로그인 없이 바로 시작
          </p>
        </div>
      </main>
    </MobileFrame>
  );
}
