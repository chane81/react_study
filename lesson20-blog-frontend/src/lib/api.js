import axios from 'axios';
import queryString from 'query-string';
// import dotenv from 'dotenv';

// env 파일 설정 가져오기
// dotenv.config();

// api 호스트 가져오기
const { API_HOST: apiHost } = process.env;

// 로그인
export const login = password => axios.post(`${apiHost}/api/auth/login`, {
  password
});

// 로그인 체크
export const checkLogin = () => axios.get(`${apiHost}/api/auth/check`);

// 로그아웃
export const logout = () => axios.post(`${apiHost}/api/auth/logout`);

// 글쓰기
export const writePost = ({ title, body, tags }) => axios.post(`${apiHost}/api/posts`,
  {
    title, body, tags
  });

// 글 뷰
export const getPost = id => axios.get(`${apiHost}/api/posts/${id}`);

// 리스트
export const getPostList = ({ tag, page }) => axios.get(`${apiHost}/api/posts/?${
  queryString.stringify({
    tag, page
  })}`);

// 글 수정
export const editPost = ({ id, title, body, tags }) => axios.patch(`${apiHost}/api/posts/${id}`, {
  title, body, tags
});

// 글 삭제
export const removePost = id => axios.delete(`${apiHost}/api/posts/${id}`);

export default writePost;
