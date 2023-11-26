# rokaf.click

![image](https://github.com/ohdoyoel/rokaf.click/assets/32637779/415579f3-1bb0-4928-98c5-ed65ab7bfec9)

![image](https://github.com/ohdoyoel/rokaf.click/assets/32637779/3b7c81fa-036a-4ab6-9f6d-09ddbcd4510d)

> - 첫 웹 토이 프로젝트!
> - 공군 병사가 사지방에서 gitpod.io로 개발!
> - 공군이 내놓은 디자인 적극 활용!

## Intro

Link: https://beautiful-cendol-31e2b4.netlify.app (rokaf.click으로 custom domain set 예정)

**rokaf.click 공군 부대 간 클릭 수로 경쟁합니다.**

![rokaf click - Chrome 2023-11-27 01-08-03 (1)](https://github.com/ohdoyoel/rokaf.click/assets/32637779/47650e83-5bbb-4dd8-9641-e6cdef019ced)

POPCAT.CLICK 이라는 사이트를 알고 있나요? 국가 간 클릭 수를 이용해 순위를 매기는 게임을 할 수 있는 사이트입니다. **해당 게임을 공군 부대끼리 진행하면 어떨까요? rokaf.click은 이 아이디어에서 시작되었습니다.**

React와 NextJS를 공부한 후 이들을 사용하여 진행해보고 싶은 프로젝트들을 나열했습니다. 여러가지가 있었지만, 이 프로젝트가 제일 쉬워보여서 이 녀석을 먼저 개발하기 시작했습니다. _(물론 절대 만만하지 않았습니다.)_

## Features

### 1. 부대 선택

이용자의 부대 위치를 선택합니다. 부대 위치는 나무위키와 위키백과에 있는 공군 편제 문서를 참고하여 작성되었습니다.

![rokaf click - Chrome 2023-11-27 01-19-32](https://github.com/ohdoyoel/rokaf.click/assets/32637779/c914895b-86f2-4799-9be8-90f1b8ace6f7)

> - 부대 위치를 선택하면 캐릭터가 활성화됩니다.
> - 부대 위치를 선택하면 리더보드에 현재 부대 랭크 정보가 표시됩니다.

### 2. 캐릭터 선택

버튼의 캐릭터 이미지를 선택합니다.

![rokaf click - Chrome 2023-11-27 01-24-21 (2)](https://github.com/ohdoyoel/rokaf.click/assets/32637779/e8ab6380-b719-4fe8-b5da-4640548a43a6)

> 캐릭터의 디자인은 '공군이 내놓은 디자인 - 뚠뚠이 의복캐릭터 (작성자: 병장 이성선)'을 사용하였습니다.

### 3. CharacterButtonWithScore (캐릭터 버튼)

캐릭터 이미지를 클릭하면 애니메이션과 함께 점수가 올라갑니다.

![rokaf click - Chrome 2023-11-27 01-08-03 (1)](https://github.com/ohdoyoel/rokaf.click/assets/32637779/47650e83-5bbb-4dd8-9641-e6cdef019ced)

> 올라간 점수는 리더보드에서 업데이트된 랭크와 점수로 표시됩니다.

### 4. RankingBar (리더보드)

모든 부대를 클릭 수로 정렬하여 그들의 랭크를 표시합니다.

![rokaf click - Chrome 2023-11-27 01-31-47](https://github.com/ohdoyoel/rokaf.click/assets/32637779/4cfa51ef-366b-4b56-82eb-d503603c45e5)

> 캐릭터를 클릭할 때마다 업데이트됩니다.

### 5. Custom API

부대 위치를 바꾸거나, 페이지를 새로고침 및 창 닫기 (onBeforeUnload) 이벤트가 발생할 때마다 Custom API로 POST 요청을 보내 서버 점수를 업데이트합니다.

## Dependency

<a href="" target="_blank"><img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/></a>

## Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/6886a8b4-fae3-4ee8-ac84-131e31f17f90/deploy-status)](https://app.netlify.com/sites/beautiful-cendol-31e2b4/deploys)

Netlify: https://app.netlify.com/sites/beautiful-cendol-31e2b4/overview


