# CRA 를 이용한 TYPESCRIPT REACT 프로젝트 생성

## 생성

> npx create-react-app my-app --typescript

> npx create-react-app my-app --scripts-version=react-scripts-ts


## yarn start 에러 발생 시
- 에러내용
  > H:/#2. Project/React/react_study/lesson107-react-typescript/node_modules/@types/node/buffer.d.ts

  > Type error: Invalid character.  TS1127
- 해결
  > @types/node 버전이 "10.12.21" 일 때 생기는 문제
  
  > "10.12.20" 버전으로 다운그레이드 진행하면 해결 됨
  
  > yarn upgrade @types/node 10.12.20