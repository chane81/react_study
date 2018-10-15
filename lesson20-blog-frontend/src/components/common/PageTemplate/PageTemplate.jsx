import React from 'react';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import styles from './PageTemplate.scss';

const cx = classNames.bind(styles);

const PageTemplate = () => (
  <div className={cx('page-template')}>
    <Header />
    <Footer />
  </div>
);

export default PageTemplate;
