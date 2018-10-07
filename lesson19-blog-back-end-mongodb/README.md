# Koa 백엔드 + MongoDB 관련

    - Express 제작팀이 만든 백엔드서버 프레임워크
    - Express 의 경우는 기존 개발팀이 소유권을 IBM 계열사인 StringLoop 로 넘김
    - Koa 는 Express 를 리팩토링한 결과물이고 기존 Express에 비해 아키텍쳐가 많이 바뀌어서 Express에서 버전업을 하지 않고
      새이름으로 명칭함
    - 차이점은 Express 에 비해 훨씬 가볍고 Node v7.6 부터 지원하는 async/await 문법을 편하게 사용할 수 있음
    - Express는 아직 정식으로 async/await 를 지원하지 않음

## koa-bodyparser

    - POST/PUT/PATCH 같은 메서드의 Request Body 에 JSON 형식으로 데이터를 넣어주면, 이를 파싱하여 서버에서 사용할 수 있게 함

## Yarn add

    - yarn init
    - yarn add koa
    - yarn add koa-bodyparser
    - yarn add koa-router
    - yarn add nodemon
    - yarn global add eslint
    - yarn add eslint
    - eslint --init
        - How would you like to configure ESLint? : Use a popular style guide
        - Which style guide do you want to follow? : Airbnb
        - Do you use React : No
        - What format do you want your config file to be in? : JavaScript

## method & api url & data

    - 의미
        - GET       : 데이터 조회
        - POST      : 데이터 INSERT
        - DELETE    : 데이터 DELETE
        - PUT       : 데이터를 통째로 REPLACE 함
        - PATCH     : 데이터의 일부분만 UPDATE 함

    - URL & DATA
        - GET       > LIST      : http://localhost:4000/api/posts
        - GET       > READ      : http://localhost:4000/api/posts/:id
        - POST      > WRITE     : http://localhost:4000/api/posts
        - PUT       > REPLACE   : http://localhost:4000/api/posts/:id
        - PATCH     > UPDATE    : http://localhost:4000/api/posts/:id
        - DELETE    > REMOVE    : http://localhost:4000/api/posts/:id

        - DATA

            ```json
                    [
                        {
                            "id": 1,
                            "title": "apple",
                            "body": "red"
                        },
                        {
                            "id": 2,
                            "title": "banana",
                            "body": "yellow"
                        }
                    ]
            ```
