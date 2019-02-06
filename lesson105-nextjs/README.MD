# NEXT.JS - 서버사이드랜더링 라이브러리

## NEXT.JS 빌드시에 아래와 같은 에러가 날 경우 대처

> Cannot read property 'minify' of undefined

- 참고 URL
  - https://github.com/zeit/next.js/issues/6194
1. yarn.lock 제거
2. package.json 에 아래 구문 추가
    ```json
    "resolutions": {
        "terser": "3.14.1"
      }
    ```
3. node_modules 폴더 삭제
4. yarn 명령어 수행해서 node_module 다시 설치
5. yarn build 다시 하면 끝

## 배포시에 NEXT.JS 의 EXPORT 기능을 이용하여 배포파일을 생성하자
- next.config.js 파일을 만들어 라우팅구문 추가
    ```js
    exports.exportPathMap = () => ({
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/search": { page: "/search", query: { title: "hello-nextjs" } },
      "/ssr-test": { page: "/ssr-test", query: { title: "learn-nextjs" } }
    })
    ```
- package.json 에 빌드시 아래 구문 추가
    ```json
    "build": "next build && next export"
    ```
- yarn build 를 수행하면 out 폴더에 배포 파일이 생성