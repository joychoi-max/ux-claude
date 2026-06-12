import { Suspense } from "react";
import { MobileFrame } from "../components/MobileFrame";
import { TaskRelease } from "./TaskRelease";

/**
 * S002 "할 일 풀어놓기".
 * useSearchParams(역할 파라미터)를 쓰므로 Suspense 경계로 감싼다.
 */
export default function SetupPage() {
  return (
    <Suspense
      fallback={
        <MobileFrame>
          <div className="flex-1" />
        </MobileFrame>
      }
    >
      <TaskRelease />
    </Suspense>
  );
}
