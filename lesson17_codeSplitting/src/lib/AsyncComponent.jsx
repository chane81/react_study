import React from 'react';

import { asyncComponent } from 'react-async-component';

// react-async-component HOC(Higher Order Function) 를 사용한 경우
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

// 사용자 커스텀 HOC(Higher Order Function) 를 사용한 경우
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

//export default AsyncComponent;
