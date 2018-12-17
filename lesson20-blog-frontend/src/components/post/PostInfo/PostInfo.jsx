import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './PostInfo.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const PostInfo = ({ publishedDate, title, tags }) => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1>{title}</h1>
      <div className={cx('tags')}>
        {// tags 가 존재할 때만 map 을 실행
        tags
          && tags.map(tag => (
            <Link key={tag} to={`/tag/${tag}`}>
              #{tag}
            </Link>
          ))}
      </div>
      <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
    </div>
  </div>
);

// Prop Types
PostInfo.propTypes = {
  publishedDate: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.string
};

// Component Export
export default PostInfo;
