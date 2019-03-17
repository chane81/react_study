import React from 'react';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';
import PropTypes from 'prop-types';
import styles from './PostBody.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const PostBody = ({ body }) => (
  <div className={cx('post-body')}>
    <div className={cx('paper')}>
      <MarkdownRender markdown={body} />
    </div>
  </div>
);

// Prop Types
PostBody.propTypes = {
  body: PropTypes.string
};

// Component Export
export default PostBody;
