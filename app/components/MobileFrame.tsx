import type { ReactNode } from "react";

/**
 * 개인 비서 성격에 맞춘 모바일 우선 프레임.
 * 모바일에서는 풀폭, 데스크톱에서는 중앙 정렬된 모바일 프레임으로 본다.
 * (docs/DESIGN.md — 모바일 우선 단일 컬럼, 데스크톱 max-width ~420~480px)
 */
export function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-surface-40 sm:py-10">
      <div className="flex min-h-dvh w-full max-w-[26.5rem] flex-1 flex-col bg-surface sm:min-h-0 sm:flex-none sm:rounded-[40px] sm:border sm:border-border sm:shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
        {children}
      </div>
    </div>
  );
}
