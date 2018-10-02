import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
//import { transaction } from 'mobx';
//import { toJS } from 'mobx';
import { autorun } from 'mobx';

//@inject('postStoreV2')
@inject(stores => ({ postStore: stores.postStoreV2 }))
@observer
class Post extends Component {
	constructor(props) {
		super(props);

		const { postStore } = props;

		// 증가시켰을 때에만 autorun 감지
		++postStore.num;

		// autorun 테스트
		autorun(() => {
			console.log(`num값:${postStore.num}`);
		});
	}

	// 요청버튼 클릭
	handlerClick = () => {
		const { postStore } = this.props;

		postStore.requestUsers();
	};

	// 컴포넌트 마운트 이전
	componentWillMount() {
		const { postStore } = this.props;

		postStore.requestUsers();
	}

	render() {
		const { postStore } = this.props;

		return (
			<div>
				상태값:
				{postStore.getState}
				<div>
					<button onClick={this.handlerClick}>데이터 요청!!!</button>
				</div>
				<hr />
				<div>{postStore.getLoad}</div>
			</div>
		);
	}
}

export default Post;

// 데코레데터를 쓰지 않는다면 아래처럼
// export default inject(stores => ({ postStore: stores.postStoreV2 }))(
// 	observer(Post)
// );
