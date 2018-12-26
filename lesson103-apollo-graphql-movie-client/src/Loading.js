import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Home.scss';

const cx = classNames.bind(styles);

const Loading = () => (
  <div className={cx('loading')}>
    <img src="/images/loading.gif" alt="loading" />
  </div>
);

export default Loading;