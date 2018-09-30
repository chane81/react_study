import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { transaction } from 'mobx';
//import { toJS } from 'mobx';

// @inject(stores => stores)
@inject('postStore')
@observer
class Post extends Component {
	handlerClick = () => {
		const { postStore } = this.props;

		transaction(() => {
			postStore.requestUsers();
			postStore.requestEmployees();
		});
	};

	componentWillMount() {
		const { postStore } = this.props;

		transaction(() => {
			postStore.requestUsers();
			postStore.requestEmployees();
		});
	}

	render() {
		const { postStore } = this.props;

		const usersDom = postStore.users.case({
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

		const employeesDom = postStore.employees.case({
			pending: () => {
				return 'loading';
			},
			rejected: e => {
				return 'error: ' + e;
			},
			fulfilled: employees => {
				return (
					<div>
						<div>TITLE: {employees.title}</div>
						<div>BODY: {employees.body}</div>
					</div>
				);
			}
		});

		return (
			<div>
				<div>
					<button onClick={this.handlerClick}>데이터 요청!!!</button>
				</div>
				<hr />
				<div>{usersDom}</div>
				<hr />
				<div>{employeesDom}</div>
			</div>
		);
	}
}

export default Post;
//export default inject(stores => stores)(observer(Post));

// export default inject(stores => ({
// 	users: stores.postStore.users,
// 	requestUsers: stores.postStore.requestUsers
// }))(observer(Post));
