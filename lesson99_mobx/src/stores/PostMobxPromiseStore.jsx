import { observable, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

export default class PostStore {
	@observable
	users;

	@action.bound
	requestUsers() {
		this.users = fromPromise(
			fetch('https://randomuser.me/api/?results=10')
				.then(res => res.json())
				.then(data => data.results)
		);
	}

	@observable
	employees;

	@action.bound
	requestEmployees() {
		const randomNum = Math.floor(Math.random() * 10) + 1;

		this.employees = fromPromise(
			fetch(`http://jsonplaceholder.typicode.com/posts/${randomNum}`)
				.then(res => res.json())
				.then(data => data)
		);
	}
}
