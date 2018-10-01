import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Menu = () => {
	const activeStyle = {
		color: 'green',
		fontSize: '2rem'
	};

	return (
		<div>
			<ul>
				<li>
					<NavLink exact to="/" activeStyle={activeStyle}>
						홈
					</NavLink>
					{/* <Link to="/">홈</Link> */}
				</li>
				<li>
					<NavLink exact to="/about" activeStyle={activeStyle}>
						소개
					</NavLink>
					{/* <Link to="/about">소개</Link> */}
				</li>
				<li>
					<NavLink exact to="/about/react" activeStyle={activeStyle}>
						React 소개
					</NavLink>
					{/* <Link to="/about/react">React 소개</Link> */}
				</li>
				<li>
					<NavLink to="/posts" activeStyle={activeStyle}>
						포스트 목록
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
