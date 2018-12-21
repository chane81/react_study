import React from 'react';
import classNames from 'classnames/bind';
import Button from 'components/common/Button/Button';
import styles from './Pagination.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const Pagination = ({ page, lastPage, tag }) => {
  const createPagePath = pageNo => (tag ? `/tag/${tag}/${pageNo}` : `/page/${pageNo}`);

  return (
    <div className={cx('pagination')}>
      <Button disabled={page === 1} to={createPagePath(page - 1)}>
        이전 페이지
      </Button>
      <div className={cx('number')}>페이지 {page}</div>
      <Button disabled={page === lastPage} to={createPagePath(page + 1)}>
        다음 페이지
      </Button>
    </div>
  );
};

// Component Export
export default Pagination;
