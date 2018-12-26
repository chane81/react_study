import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE }  from '../graphql/queries';
import classNames from 'classnames/bind';
import styles from '../styles/global.scss';
import Movie from '../components/Movie';
import Loading from '../components/Loading';

const cx = classNames.bind(styles);

const Home = () => <Query query={HOME_PAGE}>{
  ({ loading, data, error}) => {
    if (loading) return <Loading/>
    if (error) return <span>error!</span>
    if (data) {
      console.log(data);
      return (
        <div className={cx('Home')}>
          {
            data.movies.map(movie => (
              <Movie 
                key={movie.id}
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