# Week 4

**[한국임상정보](https://clinicaltrialskorea.com/)의 검색영역 클론하기**

[screen-searchbar.webm](https://github.com/YUNH7/searchbar-practice/assets/113083398/4dd765f9-d3e4-4141-9b03-0fbd5016087d)

<br>

## 프로젝트 개요

### [배포 링크](https://searchbar-practice.vercel.app/)

> [서버 실행 필요](#프로젝트-실행)

### 주요 기능

- 검색어 추천 기능
- 로컬 캐싱 구현
- 추천 검색어 키보드 방향키로 컨트롤

<br>

## 구현 방법

<details>
<summary><strong>캐싱 구현 방법(+ expire time)</strong></summary>
<div markdown="1">

- api 호출 함수를 클로저 함수로 작성하여 내부 함수에서만 접근할 수 있는 객체 생성

- api 호출 시 응답과 현재 시간을 객체에 저장  
  `{ 검색어 : { data: res.data, date: 현재 시간 } }`

- 이전에 검색한 단어로 함수를 재호출 시  
  객체에 저장된 `검색어.date`와 현재 시간을 비교하여  
  호출 이후 5분이 지나지 않았다면 `검색어.data` 반환, 지났다면 재호출

</div>
</details>

<details>
<summary><strong>API 호출 횟수를 줄이기 위한 전략</strong></summary>
<div markdown="1">

- 검색어의 첫번째 글자로만 호출하도록 함수 작성

- 검색어의 길이가 1보다 큰 경우,  
  첫번째 글자로 호출하고  
  검색어를 포함하고 있는 값만 filter하여 리턴 시킴

</div>
</details>

<details>
<summary><strong>키보드(아래 방향키)를 사용해 추천 검색어로 이동하도록 구현</strong></summary>
<div markdown="1">

- 방향키를 사용해 이동할 요소 `검색어 ul`에 `ref` 할당

- input에서 `아래 방향키`를 누르면 ref에 포커스 이벤트를 실행하여 `검색어 ul`로 이동

- `검색어 ul` 내부에서 인덱스를 상태로 관리하고, 위아래 방향키를 눌렀을 때 인덱스를 +-해줌

- 상태 인덱스와 일치하는 `li`를 강조표시하여 이동하는 것처럼 보이도록 구현

</div>
</details>

<br>

## 프로젝트 실행

> 서버 실행 필요([서버 실행 방법](https://github.com/walking-sunset/assignment-api))

1. 설치 `npm install`
2. 서버 env 파일 설정(`VITE_ASSIGNMENT_API=baseurl`)
3. 실행 `npm run start`

<br>

## 기술 스택

- typescript
- react
- styled-components
- axios
- vite
- eslint
- prettier
