# vue-news

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## 비동기 get 요청 불러온 후 ui에 표시하는 과정

1. view의 created 부분에 dispatch로 actions에 실행할 함수 넣기 `this.$store.dispatch("FETCH_ITEM", id);`
2. actions에서 비동기 로직 실행 후 `context.commit("mutations의 함수",payload)` 실행
3. mutations에서 state에 actions에서 받은 payload값 넣어주기 `state.data = payload`
4. getters에서 state값 return하여 view에서 쉽게 사용하기 `fetchItem(state) {
  return state.item;
}`
5. view에서 computed안에 mapGetters사용하여 선언하기

## 데이터 호출 시점

1. 컴포넌트 라이프 사이클 훅

- created: 컴포넌트가 생성되자마 아직 DOM트리에 그려지기 전이다.

2. 라우터 네이게이션 가드

- 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)
- 컴포넌트 라이프 사이클 훅보다 먼저 실행된다.
