import axios from 'axios';
import queryString from 'query-string';

// 글쓰기
export const writePost = ({ title, body, tags }) => axios.post('/api/posts',
  {
    title, body, tags
  });

// 글 뷰
export const getPost = id => axios.get(`/api/posts/${id}`);

// 리스트
export const getPostList = ({ tag, page }) => axios.get(`/api/posts/?${
  queryString.stringify({
    tag, page
  })}`);

export default writePost;
