import React from 'react';
import classNames from 'classnames/bind';
import styles from './PostList.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const PostItem = () => (
  <div className={cx('post-item')}>
    <h2>
      <a href="#/">타이틀</a>
    </h2>
    <div className={cx('date')}>2018-10-21</div>
    <p>내용</p>
    <div className={cx('tags')}>
      <a href="#/">#태그</a>
      <a href="#/">#태그</a>
      <a href="#/">#태그</a>
    </div>
  </div>
);

const PostList = () => (
  <div className={cx('post-list')}>
    <PostItem />
    <PostItem />
    <PostItem />
  </div>
);

// Component Export
export default PostList;
