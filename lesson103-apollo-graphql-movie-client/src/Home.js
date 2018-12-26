import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE }  from './queries';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import Movie from './Movie';
import Loading from './Loading';

const cx = classNames.bind(styles);

const Home = () => <Query query={HOME_PAGE}>{
  ({ loading, data, error}) => {
    if (loading) return <Loading/>
    if (error) return <span>error!</span>
    if (data) {
      console.log(data);
      return (
        <div className={cx('home-wrap')}>
          {
            data.movies.map(movie => (
              <Movie 
                id={movie.id}
                title={movie.title}
                rating={movie.rating}
                posterUrl={movie.medium_cover_image}
              />
            ))
          }
        </div>
      )
    }
  }
}</Query>;

export default Home;