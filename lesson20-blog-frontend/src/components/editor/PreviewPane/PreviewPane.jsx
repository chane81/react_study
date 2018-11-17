import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import MarkdownRender from 'components/common/MarkdownRender';
import styles from './PreviewPane.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const PreviewPane = ({ markdown, title }) => (
  <div className={cx('preview-pane')}>
    <h1 className={cx('title')}>{title}</h1>
    <div>
      <MarkdownRender markdown={markdown} />
    </div>
  </div>
);

// Prop Types
PreviewPane.propTypes = {
  markdown: PropTypes.string,
  title: PropTypes.string
};

// Component Export
export default PreviewPane;
