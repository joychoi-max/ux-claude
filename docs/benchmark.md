# 벤치마크 리서치 — 굿럭키 (Good Lucky)

> Vibe UX · benchmark-research 산출물
> 조사일: 2026-06-12
> 기반: docs/idea.md

## 한 줄 요약
하루 관리 앱 시장은 **① 조용한 플래너/스케줄러**(내가 열어서 계획·시간배분)와 **② 아침 정보 브리핑**(푸시로 뉴스·일정·주식)으로 크게 갈려 있고, **"하루 종일 먼저 말 거는 대화형 AI 동반자"** 라는 자리, 특히 **낮 중간 점검**은 거의 비어 있다.

## 경쟁·참고 서비스 한눈에 보기

### 직접 경쟁 (Direct)
| # | 서비스 | URL | 한 줄 포지셔닝 | 타깃 | 가격 |
|---|--------|-----|--------------|------|------|
| 1 | **Sunsama** | [sunsama.com](https://www.sunsama.com) | "Start Calm. Stay Focused. End Confident." 아침 계획 + 저녁 셧다운 의식의 마음챙김 플래너 | 모던 직장인·임원·창업자 | 연 $16/월 (14일 무료체험) |
| 2 | **Trevor AI** | [trevorai.com](https://www.trevorai.com) | "Start Your Day with a Plan." AI 일정짜기 + 데일리 진행 리뷰·코칭 이메일 | 학생·솔로프리너·임원·프리랜서 | 무료 / Pro 연 $5·월 $6 |
| 3 | **Noty** | [App Store](https://apps.apple.com/us/app/noty-ai-daily-planner-focus/id1620951759) | 매일 자정 리셋되는 "오늘만" 플래너. 아침에 "어제 어땠는지 + 오늘 미리보기" 요약 | 오늘 집중형 개인 | 무료 / 월 $3.99·연 $34.99 |
| 4 | **DayStart AI** | [App Store](https://apps.apple.com/us/app/daystart-ai-morning-briefing/id6751055528) | "Your AI Morning Intelligence." 3~7분 오디오 아침 브리핑(뉴스·날씨·일정·주식) | 아침 정보를 빠르게 챙기려는 직장인 | 무료 / 월 $4.99·연 $39.99 |
| 5 | **에이닷 (A.)** | [namu.wiki](https://namu.wiki/w/%EC%97%90%EC%9D%B4%EB%8B%B7) | 루틴을 기억하고 일정을 챙겨주는 개인화 AI 비서(출근 전 교통·일정 브리핑·리마인드) | 한국 직장인 | 무료 (통신사 서비스) |

### 간접 경쟁·대체재 / 참고 레퍼런스
| # | 서비스 | URL | 왜 참고하는가 | 겹치는 지점 |
|---|--------|-----|--------------|------------|
| 1 | **Motion** | [usemotion.com](https://www.usemotion.com) | AI가 할 일을 자동 스케줄링·재배치. "AI가 알아서 해주는" 끝판 | 자동 우선순위·일정 관리 |
| 2 | **ChatGPT Pulse** | [gpters 정리](https://www.gpters.org/newsletter/post/openai-launches-chatgpt-pulse-favgdbi3vBJl3rN) | LLM이 매일 아침 5~10개 개인화 브리핑 카드 푸시 | 능동형 아침 브리핑 |
| 3 | **마이루틴** | [App Store](https://apps.apple.com/kr/app/마이루틴-루틴-습관-투두-플래너-adhd-하루-계획표/id1518956326) | 한국 루틴·투두·일기 통합. ADHD 친화 하루 계획 | 하루 루틴·회고 통합 |
| 4 | **Saner.AI** | [saner.ai](https://www.saner.ai/blogs/best-ai-planners) | "매일 아침 뭘 할지 먼저 알려주는" proactive AI, ADHD 친화 | 능동형 제안·동반자 느낌 |

## 핵심 기능 비교
굿럭키 idea.md의 핵심 기능(아침 브리핑 / 능동 알림 / 낮 중간 점검 / 저녁 마무리 / 대화형 / 정보 한 스푼)을 기준으로 비교.

| 기능/측면 | Sunsama | Trevor AI | Noty | DayStart | 에이닷 |
|----------|---------|-----------|------|----------|--------|
| 아침 계획·브리핑 | ✅ 수동 의식 | ✅ 이메일 | ✅ 요약 카드 | ✅ 오디오 | ✅ 음성 |
| 능동형 알림(먼저 말 검) | △ 리마인더 | ✅ 데일리 이메일 | △ 아침만 | ✅ 아침 푸시 | ✅ |
| **낮 중간 점검** | ❌ | ❌ | ❌ | ❌ | △ 회의 리마인드 |
| 저녁 마무리·회고 | ✅ 셧다운 | △ overdue 리뷰 | ✅ 어제 회고 | ❌ | ❌ |
| 대화형(톡하듯) | ❌ | △ Ask Trevor | △ AI 입력 | ❌ | ✅ 대화형 |
| AI/주식 정보 곁들임 | ❌ | ❌ | ❌ | ✅ 주식·뉴스 | △ 교통·날씨 |
| 일관된 AI 페르소나 | ❌ | ❌ | ❌ | △ 앵커 음성 | △ 비서 |

## 관찰 — 잘하는 점 / 아쉬운 점
- **Sunsama**: (잘함) 아침 계획 + 저녁 셧다운이라는 **하루 의식 구조**가 굿럭키와 철학적으로 가장 닮음. 차분한 디자인, 번아웃 방지. / (아쉬움) **조용한 수동 도구** — 내가 열고 내가 계획. 먼저 말 걸지 않고, 낮 점검·대화·정보가 없음. 직장인 협업툴 연동 중심이라 무겁고 비쌈.
- **Trevor AI**: (잘함) "Start My Day" 데일리 이메일로 진행 리뷰 + **AI 코칭** 제공, 완료율 강조(85% vs 40%). 저렴. / (아쉬움) 이메일 기반이라 **관계형 대화가 아님**, 페르소나 없음, 낮 중간 케어 없음.
- **Noty**: (잘함) "매일 깨끗한 새 출발" 컨셉, 아침에 어제 회고 + 오늘 미리보기. 가볍고 저렴. / (아쉬움) 능동 케어가 아침 한 번뿐, 정보·대화·낮 점검 없음.
- **DayStart**: (잘함) **아침 + 정보(주식·뉴스·일정)** 결합을 오디오로 깔끔하게. 굿럭키의 "정보 한 스푼"과 가장 가까움. / (아쉬움) **정보 피드일 뿐 할 일 관리·점검·회고가 없음.** 하루를 같이 굴려주지 않음.
- **에이닷**: (잘함) 한국형 대화형 비서, 출근 전 브리핑·리마인드. / (아쉬움) 통신사 범용 비서라 **하루 운영(계획→점검→회고)에 특화돼 있지 않음.**

## 참고 이미지
기본 리서치 단계에서는 이미지를 수집하지 않았다. 심화 리서치(Playwright 화면 캡처)를 진행하면 `docs/images/`에 저장하고 이 표를 채운다.

| 파일 | 무엇인지 | 출처 |
|------|----------|------|
| — | — | — |

## 우리의 차별 프레이밍  ← 이 리서치의 결론
경쟁들은 거의 다 **둘 중 하나**다. ①번(Sunsama·Trevor·Noty·Motion·마이루틴)은 **계획·할 일을 관리하는 도구** — 똑똑하지만 조용하고, 내가 열어서 써야 하며, 낮에 챙겨주지 않는다. ②번(DayStart·Pulse·에이닷)은 **아침에 정보를 던지는 피드** — 말은 걸지만 내 하루를 끝까지 같이 굴려주지 않는다. **"하루 종일 곁에서 말 거는, 일관된 페르소나를 가진 AI 동반자"** 자리, 특히 **낮 중간 점검(midday check-in)** 은 거의 누구도 채우지 않았다.

- **빈틈/기회:**
  1. **낮 중간 점검의 공백** — 조사한 어느 직접 경쟁도 "지금 잘 가고 있어요?"를 낮에 능동적으로 묻지 않는다. (윤정님이 짚은 "오후의 찜찜함"이 정확히 여기다.)
  2. **관계형 페르소나의 부재** — 대부분 "도구" 톤. 일관된 캐릭터('럭키')와 톡하듯 쌓이는 관계가 없다.
  3. **계획 챙김 + 정보 브리핑의 분리** — 보통 둘 중 하나만. 한 비서가 둘 다 해주지 않는다.
- **우리의 자리(포지셔닝):** 조용한 플래너도, 일방적 정보 피드도 아닌 — **아침·낮·저녁 하루 종일 먼저 말 걸어 페이스를 잡아주는 나만의 AI 비서 '럭키'.**
- **차별 포인트:**
  1. **3구간 능동 케어, 특히 낮 중간 점검** — 아침 브리핑·저녁 회고는 남들도 하지만, "오후의 늘어짐"을 낮에 톡으로 잡아주는 건 우리만.
  2. **일관된 페르소나 '럭키'와의 대화형 관계** — 기능을 쓰는 게 아니라 럭키와 하루를 같이 보낸다(여기에 AI·주식 정보 한 스푼까지 한 비서가 묶어줌).

## 출처
- [Sunsama 공식](https://www.sunsama.com)
- [Trevor AI 공식](https://www.trevorai.com)
- [Noty — App Store](https://apps.apple.com/us/app/noty-ai-daily-planner-focus/id1620951759)
- [DayStart AI — App Store](https://apps.apple.com/us/app/daystart-ai-morning-briefing/id6751055528)
- [Sunsama vs Motion 비교 — Efficient App](https://efficient.app/compare/motion-vs-sunsama)
- [ChatGPT Pulse 정리 — gpters](https://www.gpters.org/newsletter/post/openai-launches-chatgpt-pulse-favgdbi3vBJl3rN)
- [에이닷 — 나무위키](https://namu.wiki/w/%EC%97%90%EC%9D%B4%EB%8B%B7)
- [마이루틴 — App Store](https://apps.apple.com/kr/app/마이루틴-루틴-습관-투두-플래너-adhd-하루-계획표/id1518956326)
- [AI Planners 비교 — Saner.AI](https://www.saner.ai/blogs/best-ai-planners)
