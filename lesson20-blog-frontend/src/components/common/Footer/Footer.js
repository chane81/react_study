import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

const Footer = ({ onLoginClick, logged }) => (
  <footer className={cx('footer')}>
    <Link to="/" className={cx('brand')}>
      reactblog
    </Link>
    <div onClick={onLoginClick} className={cx('admin-login')}>
      {logged ? '로그아웃' : '관리자 로그인'}
    </div>
  </footer>
);

// Prop Types
Footer.propTypes = {
  onLoginClick: PropTypes.func,
  logged: PropTypes.bool
};

export default Footer;
