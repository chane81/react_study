import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './PostInfo.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const PostInfo = () => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1>타이틀</h1>
      <div className={cx('tags')}>
        <a>#태그</a> <a>#태그</a> <a>#태그</a>
      </div>
      <div className={cx('date')}>0ct 29, 2017</div>
    </div>
  </div>
);

// Component Export
export default PostInfo;
