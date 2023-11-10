# rokaf.click

> - 첫 웹 토이 프로젝트!
> - 공군 병사가 사지방에서 gitpod.io로 개발!
> - 공군이 내놓은 디자인 적극 활용!

## Intro

**rokaf.click 공군 부대 간 클릭 수로 경쟁합니다.**

Link: https://beautiful-cendol-31e2b4.netlify.app

## Functions

### 1. LocationBar (부대 선택)

나무위키와 위키백과에 있는 공군 편제 문서를 참고하여 부대 위치를 선택합니다.

- 부대 위치를 선택하면 CharacterButtonWithScore가 활성화됩니다.
- 부대 위치를 선택하면 RankingBar에 현재 부대 랭크 정보가 표시됩니다.

### 2. CharacterBar (캐릭터 선택)

CharacterButtonWithScore의 캐릭터를 선택합니다.

> 캐릭터의 디자인은 '공군이 내놓은 디자인 - 뚠뚠이 의복캐릭터 (작성자: 병장 이성선)'을 사용하였습니다.

### 3. CharacterButtonWithScore (캐릭터 버튼)

캐릭터 이미지를 클릭하면 애니메이션과 함께 점수가 올라갑니다.

- 올라간 점수는 RankingBar에서 합산되어 업데이트된 랭크와 점수로 표시됩니다.

### 4. RankingBar (리더보드)

모든 부대를 클릭 수로 정렬하여 그들의 랭크를 표시합니다.

- CharacterButtonWithScore를 클릭할 때마다 업데이트됩니다.

### Custom API

부대 위치를 바꾸거나, 페이지를 새로고침 및 창 닫기 (onBeforeUnload) 이벤트가 발생할 때마다 Custom API로 POST 요청을 보내 서버 점수를 업데이트합니다.

## Dependency

- Next.js
- React
- tailwindcss
- axios

## Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/6886a8b4-fae3-4ee8-ac84-131e31f17f90/deploy-status)](https://app.netlify.com/sites/beautiful-cendol-31e2b4/deploys)

Netlify: https://app.netlify.com/sites/beautiful-cendol-31e2b4/overview


