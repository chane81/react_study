import React from 'react';

const AsyncComponent = getComponent => {
	return class AsyncComponentLoad extends React.Component {
		static Component = null;
		state = { Component: AsyncComponentLoad.Component };

		constructor(props) {
			super(props);

			if (AsyncComponentLoad.Component) return;

			getComponent().then(({ default: Component }) => {
				AsyncComponentLoad.Component = Component;
				this.setState({ Component });
			});
		}

		render() {
			const { Component } = this.state;

			if (Component) {
				return <Component {...this.props} />;
			}

			return null;
		}
	};
};

export default AsyncComponent;
