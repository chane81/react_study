import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';

const getPostApi = postId => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

// promise 미들웨어의 경우 ajax 호출시 옵션설정(팬딩, 성공, 실패) 에 따라서
// 기본액션 뒤(GET_POST)에 언더바 + 접미사로 붙는 액션(GET_POST_PENDING, GET_POST_SUCCESS, GET_POST_FAILURE)이 생성이 된다
// promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILUER']
export const GET_POST = '/lesson15/reduxPender/GET_POST';
export const GET_POST_PENDING = '/lesson15/reduxPender/GET_POST_PENDING';
export const GET_POST_SUCCESS = '/lesson15/reduxPender/GET_POST_SUCCESS';
export const GET_POST_FAILURE = '/lesson15/reduxPender/GET_POST_FAILURE';
const SET_INCREMENT = 'lesson15/reduxPender/SET_INCREMENT';
const SET_DECREMENT = 'lesson15/reduxPender/SET_DECREMENT';

// createaction 구문
export const getPost = createAction(GET_POST, getPostApi);
export const increment = createAction(SET_INCREMENT);
export const decrement = createAction(SET_DECREMENT);

// state 초기화
const initialState = fromJS({
	num: 1,
	//pending: false,
	//error: false,
	data: {
		title: '',
		body: ''
	}
});

export default handleActions(
	{
		[SET_INCREMENT]: (state, action) => {
			return state.merge({ num: state.get('num') + 1 });
		},
		[SET_DECREMENT]: (state, action) => {
			return state.merge({ num: state.get('num') - 1 });
		},
		...pender({
			type: GET_POST,
			onSuccess: (state, action) => {
				const { title, body } = action.payload.data;
				return state.mergeIn(['data'], { title, body });
			}
		})
	},
	initialState
);
