import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';
import { fromJS } from 'immutable';

const getPostApi = postId => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';
const SET_INCREMENT = 'SET_INCREMENT';
const SET_DECREMENT = 'SET_DECREMENT';

const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);
export const increment = createAction(SET_INCREMENT);
export const decrement = createAction(SET_DECREMENT);

// redux-thunk 를 쓸때의 구문
export const getPost = postId => dispatch => {
	// 요청 시작 알림 - api 호출전
	dispatch(getPostPending());

	// 요청 시작 - promise 를 리턴
	return getPostApi(postId)
		.then(response => {
			// 응답을 GET_POST_SUCCESS 의 payload로 전달
			dispatch(getPostSuccess(response));

			return response;
		})
		.catch(error => {
			//  에러내용을 GET_POST_FAILURE 의 payload로 전달
			dispatch(getPostFailure(error));

			// 해당 에러를 throw를 하여 이함수를 수행한쪽에서 catch를 할 수 있게 한다.
			throw error;
		});
};

// state 초기화
const initialState = fromJS({
	num: 1,
	pending: false,
	error: false,
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
		[GET_POST_PENDING]: (state, action) => {
			return state.merge({ pending: true, error: false });
		},
		[GET_POST_SUCCESS]: (state, action) => {
			return state.merge({ pending: false, data: action.payload.data });
		},
		[GET_POST_FAILURE]: (state, action) => {
			return state.merge({ pending: false, error: false });
		}
	},
	initialState
);
