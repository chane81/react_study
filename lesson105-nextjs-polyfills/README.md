# next.js polyfills 관련 소스

## next.js 의 최신 버전인 8.x.x 에서는 아래와 같은 에러가 IE11 에서 리프리쉬 3번 이상시 발생이되었다.
```
Unhandled promise rejection SecurityError
```

# next.js 7.x.x 버전으로 설치하면 이와 같은 에러는 발생하지 않는다.
# 단, socket.io 를 쓸때 express 를 쓰면 위와 같은 에러가 다시 발생하니 koa 를 쓰면 해결이 된다.
```
yarn add next 7.0.2
```