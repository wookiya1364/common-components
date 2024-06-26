
## FSD 아키텍처 
##### [참고자료](https://emewjin.github.io/feature-sliced-design)
- 레이어는 단방향으로만 상속할 수 있습니다.
- pages-flat에서 widgets의 기능 또는 컴포넌트를 import할 수 있지만, features에서는 widgets의 기능 또는 컴포넌트를 import해서는 안됩니다.

##### 상위 디렉토리 구조 
* pages-flat은 페이지의 모음이고, Next.js에서는 파일기반 라우팅을 하므로 pages-flat은 app의 하위에 존재하도록 변경

|||역할|
|--|--|--|
|src||root directory|
|\|-------|app|앱 진입점|
|\|-------|widgets|페이지에 사용하는 독립적인 UI 컴포넌트|
|\|-------|features|1. 비즈니스 가치를 전달하는 사용자 시나리오 및 기능 (좋아요, 리뷰 작성, 제품 평가)<br>2. 사용자에게 제공하는 구체적인 기능 구현|
|\|-------|entities|1. shared를 조합한 UI컴포넌트.<br>2. 비즈니스 엔티티를 표현 (사용자, 리뷰, 댓글)<br>3. 앱 전반에 걸쳐 공유되는 도메인 핵심 데이터와 로직을 관리|
|\|-------|shared|비즈니스 로직에 종속되지 않은 재사용 가능한 컴포넌트 및 유틸리티|
```

# Commit Messages Style

|타입|설명|
|-----|-----|
|feat|새로운 기능 추가|
|fix|버그 수정|
|docs|문서 수정|
|refactor|코드 리펙토링|
|test|테스트 코드 추가|
|perf|성능 개선|
|design|디자인 변경|


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
