import React, { Component } from 'react';
import ComponentValidation from '../components/lesson5/ValidationSample';
import ComponentScrollBox from '../components/lesson5/ScrollBox';

class Lesson5 extends Component {
	render() {
		return (
			<React.Fragment>
				<ComponentValidation />
				<p />

				<ComponentScrollBox ref={ref => (this.scrollBox = ref)} />
				<button onClick={() => this.scrollBox.scrollToBottom()}>
					맨 밑으로
				</button>
				<button onClick={() => (this.scrollBox.box.scrollTop = 0)}>
					맨 위로
				</button>
			</React.Fragment>
		);
	}
}

export default Lesson5;
