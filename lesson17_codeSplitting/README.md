## 코드 스플리팅

-   웹팩 설정

    -   entry 부분

    ```entry: {
        // entry 의 모듈들에 대해 스플리팅작업함, vendor에 서드파티 라이브러리 넣음
        app: [
          require.resolve('react-dev-utils/webpackHotDevClient'),
          paths.appIndexJs
        ],
        vendor: [
          require.resolve('./polyfills'),
          'react',
          'react-dom',
          'react-router-dom'
        ]
      },
    ```

    -   plugin 에 아래 추가

    ```plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'vendor.js'
        }),
    ```

-   비동기로 컴포넌트를 import 하는 모듈 추가

    -   /lib/AsyncComponent.jsx
    -   사용방법
        ```export const Home = AsyncComponent(() => import('./Home'));
        <Home />
        ```

-   webpack 의 프로덕션 버전의 설정 을 아래와 같이 추가함(webpack.config.prod.js)

    -   비동기 모듈 로딩 함수인 Index.async.jsx 를 쓰기위해 Index.jsx 를 replace 를 함
    -   주의: 일반적으로 상대경로를 써서 import 를 할텐데 예를 들면 /pages/Posts.jsx 안에서 /pages/Index.jsx 를 import 를 할 경우 아래와 같이 상대경로를 써서 import 를 할텐데 그렇게 하면 NormalModuleReplacementPlugin 플러그인이 해당 모듈을 realace 하지 못한다.
    -   그렇기 때문에 cross-env 노드 라이브러리를 설치 후에 아래와 같이 import 를 해야한다.

        `상대경로 import 시: import { Post } from './Index';`
        `cross-env 로 import 시 : import { Post } from 'pages/Index';`

    ```
    			new webpack.NormalModuleReplacementPlugin(
    				/pages\/Index/,
    		    'pages/Index.async.jsx'
      ),
    ```

-   웹팩 프로덕트쪽 설정을 마쳤다면 로컬에서 빌드

    -   yarn build
    -   빌드 후 아래처럼 chunk 파일이 생성이 되어야한다

    ```
    46.85 KB  build\vendor.js
    1.79 KB   build\static\js\app.b969cb5e.js
    1.47 KB   build\static\js\0.e38b78f4.chunk.js
    1.15 KB   build\static\js\1.9040bf2d.chunk.js
    332 B     build\static\js\3.17cb88f0.chunk.js
    266 B     build\static\js\2.3c7ecf2e.chunk.js
    ```

-   빌드 후에 로컬에서 build 버전을 확인하기 위해 serve 를 실행
    -   yarn global add serve
    -   serve -s build
