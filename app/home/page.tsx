import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { MobileFrame } from "../components/MobileFrame";

/**
 * S004 "홈 (오늘의 하루)" 자리표시(placeholder).
 * S003 → S004 흐름 연결만을 위한 최소 화면이며, 실제 구현은 mockup-build S004에서 진행한다.
 */
export default function HomePlaceholderScreen() {
  return (
    <MobileFrame>
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-7 pb-9 pt-4 text-center">
        <span
          className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-[2rem] leading-none"
          role="img"
          aria-label="네잎클로버, 럭키"
        >
          🍀
        </span>
        <p className="text-[1.0625rem] font-semibold text-heading">
          오늘의 하루
        </p>
        <p className="text-[0.9375rem] leading-[1.5] text-body">
          여기서 핵심 3개를 체크하고, 럭키가 낮·저녁에 다시 챙겨요.
          <br />
          이 화면(S004)은 곧 만들 예정이에요.
        </p>
        <Link
          href="/briefing"
          className="mt-2 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-primary-600 transition-colors duration-200 ease-out hover:text-primary-700"
        >
          <ArrowLeft size={16} weight="bold" aria-hidden />
          브리핑 다시 보기
        </Link>
      </main>
    </MobileFrame>
  );
}
