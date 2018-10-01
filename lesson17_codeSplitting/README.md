## 코드 스플리팅

-   웹팩 설정

    -   entry 부분

    ```entry: {
        // entry 의 모듈들에 대해 스플리팅작업함, vendor에 서트파티 라이브러리 넣음
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
        `export const Home = AsyncComponent(() => import('./Home'));`
        `<Home />`
