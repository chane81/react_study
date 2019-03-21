import React from 'react';
//import { Query } from 'react-apollo';
import { HOME_PAGE }  from '../graphql/queries';
import classNames from 'classnames/bind';
import styles from '../styles/global.scss';
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import { useQuery } from 'react-apollo-hooks';

const cx = classNames.bind(styles);

const Home = () => {
  const { data, error, loading } = useQuery(HOME_PAGE);
  if (loading) return <Loading/>;
  if (error) return <span>error!</span>;

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

export default Home;