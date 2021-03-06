import React, { Component } from 'react';

class AsyncSplitMe extends Component {
	state = {
		SplitMe: null
	};

	loadSplitMe = () => {
		// 비동기로 파일 load
		import('./SplitMe').then(({ default: SplitMe }) => {
			this.setState({
				SplitMe
			});
		});
	};

	render() {
		const { SplitMe } = this.state;

		return SplitMe ? (
			<SplitMe />
		) : (
			<button onClick={this.loadSplitMe}>SplitMe 로딩</button>
		);
	}
}

export default AsyncSplitMe;
