import React, { Component } from 'react';

export default function asyncComponent(getComponent) {
  class AsyncComponent extends Component {
    static Component = null;

    state = {
      Com: AsyncComponent.Component
    };

    constructor(props) {
      super(props);

      if (AsyncComponent.Component) return;

      getComponent().then(({ default: Com }) => {
        AsyncComponent.Component = Com;
        this.setState({
          Com
        });
      });
    }

    render() {
      const { Com } = this.state;
      if (Com) {
        return <Com {...this.props} />;
      }
      return null;
    }
  }

  // 서버사이트 렌더링/코드 스플리팅 충돌을 해결하는 함수
  AsyncComponent.getComponent = () => getComponent().then(({ default: Com }) => {
    AsyncComponent.Component = Com;
  });

  return AsyncComponent;
}
