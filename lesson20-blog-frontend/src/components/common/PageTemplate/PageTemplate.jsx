import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeaderContainer from 'containers/common/HeaderContainer';
import FooterContainer from 'containers/common/FooterContainer';
import styles from './PageTemplate.scss';

const cx = classNames.bind(styles);

// 컴포넌트
const PageTemplate = ({ children }) => (
  <div className={cx('page-template')}>
    <HeaderContainer />
    <main>{children}</main>
    <FooterContainer />
  </div>
);

// 디폴트 props
PageTemplate.defaultProps = {
  children: <div />
};

// Prop Types
PageTemplate.propTypes = {
  children: PropTypes.node
};

export default PageTemplate;
