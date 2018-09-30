import React from 'react';
import { observable, action, computed } from 'mobx';
//import { observable, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

export default class PostStoreV2 {
	@observable
	users;

	@observable
	num = 1;

	@action.bound
	requestUsers() {
		this.users = fromPromise(
			fetch('https://randomuser.me/api/?results=10')
				.then(res => res.json())
				.then(data => data.results)
		);
	}

	// when(
	// 	() => {console.log(this.users.state)}
	// 	() => {console.log(this.users.state)}
	// );

	@computed
	get getState() {
		const stateVal = this.users.state ? this.users.state : null;
		console.log(stateVal);
		return stateVal;
	}

	@computed
	get getLoad() {
		const rtnVal = this.users.case({
			pending: () => {
				return 'loading';
			},
			rejected: e => {
				return 'error: ' + e;
			},
			fulfilled: users =>
				users.map(user => (
					<div key={user.login.username}>
						<img src={user.picture.thumbnail} alt="UserPhoto" />
						{user.email}
					</div>
				))
		});

		return rtnVal;
	}
}
