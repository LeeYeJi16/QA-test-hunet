## 프로젝트 소개

이 프로젝트는 **Playwright 기반 UI 자동화 테스트 예제 프로젝트**입니다.
휴넷 CEO 사이트의 **FocusOn 페이지**를 대상으로 간단한 사용자 시나리오를 자동화하여 구현했습니다.

자동화 테스트는 **Page Object Model(POM) 구조**를 사용하여
테스트 코드와 페이지 동작을 분리하는 방식으로 작성되었습니다.

---

## 테스트 시나리오

구현된 테스트 시나리오는 다음과 같습니다.

1. FocusOn 페이지 접속
2. 첫 번째 카드의 공유 아이콘 클릭
3. 공유 메뉴 노출 확인
4. 공유 옵션 중 **Link 버튼 클릭**


---

## 사용 기술

* Playwright
* TypeScript

---

## 프로젝트 구조

```
QA-test-hunet
│
├─ pages
│   └─ focuson.page.ts
│
├─ tests
│   └─ focuson.spec.ts
│
├─ playwright.config.ts
├─ package.json
```

* **pages** : 페이지 동작을 정의한 Page Object 파일
* **tests** : 테스트 시나리오 실행 파일

---

## 테스트 실행 방법

패키지 설치

```
npm install
```

테스트 실행

```
npx playwright test
```

UI 모드 실행

```
npx playwright test --ui
```

---

## 목적

이 프로젝트는 다음을 목적으로 작성되었습니다.

* Playwright 기반 UI 테스트 자동화 구조 구현
* Page Object Model 기반 테스트 코드 구성
* QA 자동화 테스트 예제 프로젝트 작성
---
