import React from 'react';

const Post = ({ match }) => {
	return (
		<div>
			<p>포스트 #{match.params.id}</p>
			<div>테스트</div>
		</div>
	);
};

export default Post;
