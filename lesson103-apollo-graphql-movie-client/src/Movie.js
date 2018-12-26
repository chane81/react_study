import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Home.scss';

const cx = classNames.bind(styles);

const Movie = ({id, title, rating, posterUrl}) => (
    <div>
      <div 
        key={id} 
        className={cx('item')}
        style={{
          backgroundImage: `url(${posterUrl})`
        }}  
      >
        <div className={cx('title')}>
          {title} / {rating}
          <img 
          alt='평점'
          src='/images/star.png'
          className={cx('rating-img')}></img>
        </div>
      </div>
    </div>
);

export default Movie;