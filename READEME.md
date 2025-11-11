# ✨ CopyPaste — 실시간 HTML 작성 및 미리보기 툴

[👉 직접 사용해보기 (copypaste-alpha.vercel.app)](https://copypaste-alpha.vercel.app/)

---

## 📘 프로젝트 소개

**CopyPaste**는 사용자가 HTML 코드를 직접 입력하면 **실시간으로 결과를 확인할 수 있는 React 기반 웹 도구**입니다.  
`Clipboard`에서 작성한 HTML이 바로 미리보기 영역에 반영되어, HTML 구조와 스타일을 실험적으로 학습하거나 테스트할 수 있습니다.

왼쪽의 **Clipboard**에서는 HTML을 작성하고 복사할 수 있으며,  
오른쪽의 **TestBoard**에서는 별도로 입력 테스트를 할 수 있습니다.

---

## 🧠 기술 스택

| 구분 | 사용 기술 |
|------|------------|
| **Frontend** | React, TypeScript, TailwindCSS |
| **기능 구현** | useState, dangerouslySetInnerHTML, Clipboard API |
| **배포** | Vercel (copypaste-alpha.vercel.app) |

---

## 💡 배운 점 & 느낀 점

이 프로젝트를 통해 **React의 상태 관리와 DOM 렌더링 흐름**을 깊이 이해할 수 있었습니다.  
특히 `dangerouslySetInnerHTML`을 통해 사용자의 입력값을 DOM에 직접 반영하면서  
보안(XSS) 이슈에 대한 이해를 가지게 되었고,  
실시간 프리뷰 기능을 구현하면서 **React의 반응형 구조와 성능 최적화**의 중요성을 체감했습니다.

또한, 단순한 기능이더라도 UI 구조를 명확히 나누면  
**확장성 있는 컴포넌트 설계의 중요성**을 직접 느낄 수 있었습니다.

---

## 🚀 배포 링크

🔗 **Live Demo:** [https://copypaste-alpha.vercel.app/](https://copypaste-alpha.vercel.app/)

> ⚠️ 스크린샷은 생략했습니다.  
> 위 링크에서 직접 실시간 미리보기 기능을 확인할 수 있습니다.


