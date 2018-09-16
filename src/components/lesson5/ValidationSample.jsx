import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
	state = {
		password: '',
		clicked: false,
		validated: false
	};

	handleChange = e => {
		this.setState({
			password: e.target.value
		});
	};

	handleButtonClick = e => {
		this.setState({
			clicked: true,
			validated: this.state.password === '0000'
		});

		this.input.focus();
	};

	render() {
		return (
			<div>
				<input
					ref={ref => (this.input = ref)}
					type="password"
					value={this.state.password}
					onChange={this.handleChange}
					className={
						this.state.clicked
							? this.state.validated
								? 'success'
								: 'failure'
							: ''
					}
				/>
				<label>{this.state.validated ? '비번맞음' : '비번틀림'}</label>
				<button onClick={this.handleButtonClick}>검증하기</button>
			</div>
		);
	}
}

export default ValidationSample;
