import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ListWrapper.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const ListWrapper = ({ children }) => (
  <div className={cx('list-wrapper')}>{children}</div>
);

// Prop Types
ListWrapper.propTypes = {
  children: PropTypes.node
};

// Component Export
export default ListWrapper;
