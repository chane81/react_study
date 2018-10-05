import React from 'react';

import { asyncComponent } from 'react-async-component';

// react-async-component HOC(Higher Order Function) 를 사용한 경우, 얘는 props 전달 로직이 내부에 구현되어있어서 따로 props 전달 로직을 작성하지 않아도 됨
export default getComponent => {
	return asyncComponent({
		resolve: getComponent,
		LoadingComponent: () => <div>로딩중...</div>,
		ErrorComponent: e => (
			<div>
				에러발생(
				{e.message})
			</div>
		)
	});
};

// 사용자 커스텀 HOC(Higher Order Function) 를 사용한 경우, 아래보면 <Component>에 this.props 를 전달해줬는데 안 해주면 컴포넌트 props 가 전달 안됨
// const AsyncComponent = getComponent => {
// 	return class AsyncComponentLoad extends React.Component {
// 		static Component = null;
// 		state = { Component: AsyncComponentLoad.Component };

// 		constructor(props) {
// 			super(props);

// 			if (AsyncComponentLoad.Component) return;

// 			getComponent().then(({ default: Component }) => {
// 				AsyncComponentLoad.Component = Component;
// 				this.setState({ Component });
// 			});
// 		}

// 		render() {
// 			const { Component } = this.state;

// 			if (Component) {
// 				return <Component {...this.props} />;
// 			}

// 			return null;
// 		}
// 	};
// };

// export default AsyncComponent;
