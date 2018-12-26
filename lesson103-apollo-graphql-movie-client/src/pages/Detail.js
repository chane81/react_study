import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS} from '../graphql/queries'
import Loading from '../components/Loading';
import classNames from 'classnames/bind';
import styles from '../styles/global.scss';
import Movie from '../components/Movie';

const cx = classNames.bind(styles);

const Detail = ({
    match: {params: {movieId}}
}) => {
  const id = parseInt(movieId, 10);

  return (
    <Query query={MOVIE_DETAILS} variables={{ movieId: id }}>{
      ({loading, error, data}) => {
        if (loading) return <Loading/>
        if (error) return <span>error!</span>
        if (data) {
          return (
            <div className={cx('Detail')}>
              <div className={cx('top')}>
                <div className={cx('header')}>Poster Description</div>
                <div className={cx('poster')}>
                  <img alt='포스터' src={data.movie.medium_cover_image}></img>
                </div>
                <div className={cx('desc')}>
                  <div><b>Title</b>: {data.movie.title}</div>
                  <div><b>Rating</b>: {data.movie.rating}</div>
                  <div><b>Description</b>: {data.movie.description_intro}</div>
                </div>
              </div>

              <div className={cx('suggestions')}>
                <div className={cx('header')}>Suggestions</div>
                <div className={cx('movie-list')}>
                  {
                    data.suggestions.map(movie => (
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
              </div>
            </div>
          )
        }
      }
    }
    </Query>
  );
}

export default withRouter(Detail);