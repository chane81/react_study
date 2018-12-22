import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

// 영화 리스트
export const getMovies = async (limit, rating) => {
  const { 
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });

  return movies;
};

// 영화 디테일 정보
export const getMovie = async (id) => {
  const { 
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });

  return movie;
}

// 추천 영화들
export const getSuggestions = async (id) => {
  const { 
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });

  return movies;
}