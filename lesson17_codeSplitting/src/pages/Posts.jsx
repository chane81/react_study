import React from 'react';
import { Link, Route } from 'react-router-dom';

// 일반적 모듈 import
//import { Post } from 'pages/Index';

// 비동기로 모듈 import
import { Post } from './Index.async.jsx';

const Posts = ({ match }) => {
	return (
		<div>
			<h3>포스트 목록</h3>
			<ul>
				<li>
					<Link to={`${match.url}/1`}>포스트 #1</Link>
				</li>
				<li>
					<Link to={`${match.url}/2`}>포스트 #2</Link>
				</li>
				<li>
					<Link to={`${match.url}/3`}>포스트 #3</Link>
				</li>
			</ul>
			<Route path={match.url} render={() => <p>포스트를 선택하세요</p>} />
			<Route exact path={`${match.url}/:id`} component={Post} />
		</div>
	);
};

export default Posts;
