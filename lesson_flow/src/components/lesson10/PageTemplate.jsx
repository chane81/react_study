import React from 'react';
import styles from '../../styles/lesson10/PageTemplate.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const PageTemplate = ({ children }) => {
	return (
		<div className={cx('page-template')}>
			<h1>일정 관리</h1>
			<div className={cx('content')}>{children}</div>
		</div>
	);
};

export default PageTemplate;
