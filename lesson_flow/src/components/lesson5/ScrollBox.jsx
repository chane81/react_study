import React, { Component } from 'react';
import './ScrollBox.css';

class ScrollBox extends Component {
	// 맨밑으로 스크롤내리기
	scrollToBottom = () => {
		const { scrollHeight, clientHeight } = this.box;

		this.box.scrollTop = scrollHeight - clientHeight;
	};

	render() {
		return (
			<div className="box" ref={ref => (this.box = ref)}>
				<div className="boxInner" />
			</div>
		);
	}
}

export default ScrollBox;
