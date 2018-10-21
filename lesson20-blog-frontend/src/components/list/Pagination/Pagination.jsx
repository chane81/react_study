import React from 'react';
import classNames from 'classnames/bind';
import Button from 'components/common/Button/Button';
import styles from './Pagination.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const Pagination = () => (
  <div className={cx('pagination')}>
    <Button disabled>이전 페이지</Button>
    <div className={cx('number')}>페이지 1</div>
    <Button>다음 페이지</Button>
  </div>
);

// Component Export
export default Pagination;
