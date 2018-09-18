import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';

const getPostApi = postId => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

// pender 미들웨어의 경우엔 팬딩, 성공, 실패에 대한 액션이 따로 필요하지 않다
export const GET_POST = '/lesson15/reduxPender/GET_POST';
const SET_INCREMENT = 'lesson15/reduxPender/SET_INCREMENT';
const SET_DECREMENT = 'lesson15/reduxPender/SET_DECREMENT';

// createaction 구문
export const getPost = createAction(GET_POST, getPostApi);
export const increment = createAction(SET_INCREMENT);
export const decrement = createAction(SET_DECREMENT);

// state 초기화
const initialState = fromJS({
	num: 1,
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
			type: this.GET_POST,
			onSuccess: (state, action) => {
				const { title, body } = action.payload.data;
				return state.mergeIn(['data'], { title, body });
			},
			onCancel: (state, action) => {
				return state.mergeIn(['data'], {
					title: '취소됨',
					body: '취소됨'
				});
			}
		})
	},
	initialState
);
