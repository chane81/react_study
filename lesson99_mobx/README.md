## 상태관리를 mobx 를 사용

-   mobx 관련 모듈 add

    -   yarn add mobx mobx-react mobx-react-devtools
    -   yarn add babel-preset-mobx@^1.0.3"

-   데코레이터 문법을 사용하면 아래와 같은 문구가 나오는데 tsconfig.json 파일생성 후 설정을 해주어야 한다., 설정이 완료되면 vs-code 를 재부팅할것!

    -   데코레이터에 대한 실험적 지원 기능은 이후 릴리스에서 변경될 수 있습니다. 이 경고를 제거하려면 'experimentaldecorators' 옵션을 설정하세요.

    -   tsconfig.json 설정

        ```json
        {
        	"compilerOptions": {
        		"experimentalDecorators": true,
        		"allowJs": true
        	}
        }
        ```
