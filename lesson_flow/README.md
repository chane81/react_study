## 0. GIT 설정

-   파일명에서 대소문자로 변경시에 디폴트는 ignorecase = true 이기 때문에 대소문자로 파일명을 변경해도 GitHub 쪽 소스에는 반영이 되지 않는다.
-   소스폴더에서 .git\config 파일을 열어 ignorecase = false 로 수정할것!

## 1. index.js 를 index.jsx 로 읽게 하기 위해 설정 변경

-   appIndexJs: resolveApp('src/index.jsx')

## 2. node_modules 를 프로젝트별 공유하게 함(주의. 경로는 원하는 곳으로 하더라도 꼭! node_modules 로 이름을 지어야한다. conflict 가 발생하므로)

-   yarnrc 설정 파일 추가 : yarn 모듈 설치시 기본적으로 지정된 폴더로 설치되게 하기위해

    -   구문 : --\*.modules-folder "../../node_modules"

## 3. yarn 명령어

-   yarn 의 모듈 설치시 예제(위의 .yarnrc 가 있다면 아래처럼 "--modules-folder" 옵션을 줄 필요 없음)
    -   ex)
        -   yarn install --modules-folder ../../node_modules
        -   yarn add --modules-folder ../../node_modules react-router-dom
        -   yarn remove --modules-folder ../../node_modules react-router-dom
-   yarn config
    -   ex)
        -   yarn config set dev-dependencies-folder ../../node_modules
        -   yarn config set modules-folder ../../node_modules
        -   yarn config list
        -   yarn cache clean

## 4. eslintrc 설정 관련

-   eslint plugin 의 설정 문서

    -   https://eslint.org/docs/user-guide/configuring#specifying-parser-options

-   옵션수치(https://eslint.org/docs/user-guide/configuring#specifying-parser-options)
    -   "off" or 0 - turn the rule off
    -   "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    -   "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
