import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE }  from './queries';
import classNames from 'classnames/bind';
import styles from './Home.scss';

const cx = classNames.bind(styles);

const Home = () => <Query query={HOME_PAGE}>{
  ({ loading, data, error}) => {
    if (loading) return <span>loading</span>;
    if (error) return <span>error!</span>
    if (data) {
      console.log(data);
      return (
        <div className={cx('home-wrap')}>
          {
            data.movies.map(movie => (
              <div 
                key={movie.id} 
                className={cx('item')}
                style={{
                  backgroundImage: `url(${movie.medium_cover_image})`
                }}  
              >
                <div className={cx('title')}>
                  {movie.title} / {movie.rating}
                  <img 
                  alt='평점'
                  src={require('./images/star.png')}
                  className={cx('rating-img')}></img>
                </div>
              </div>
            ))
          }
        </div>
      )
    }
  }
}</Query>;

export default Home;