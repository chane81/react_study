import React from 'react';
import classNames from 'classnames/bind';
import styles from './PostBody.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const Button = () => (
  <div className={cx('post-body')}>
    <div className={cx('paper')}>내용</div>
  </div>
);

// Component Export
export default Button;
