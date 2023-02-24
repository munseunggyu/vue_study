# Quasar App (quasar)

A Quasar Project

## Start

npm i && npm run dev

### boot파일 사용

- 사용 이유: .quasar/app.js에 플러그인을 추가하거나 글로벌 프로퍼티에 다른 속성을 추가 하고 싶을때 즉, 애플리케이션을 초기화하는 코드를 추가 하고 싶을때

1. boot폴더안에 파일 생성
2. 코드 작성
3. quasar.config.js에서 boot를 찾은 후 `boot: ['constants']` 처럼 넣어주기
