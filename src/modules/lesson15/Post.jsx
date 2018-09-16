//import { handleActions, createAction } from 'redux-actions';
import { handleActions } from 'redux-actions';
import axios from 'axios';
import { fromJS } from 'immutable';

const getPostApi = postId => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

const GET_POST = '/lesson15/GET_POST';
const GET_POST_PENDING = '/lesson15/GET_POST_PENDING';
const GET_POST_SUCCESS = '/lesson15/GET_POST_SUCCESS';
const GET_POST_FAILURE = '/lesson15/GET_POST_FAILURE';

// const getPostPending = createAction(GET_POST_PENDING);
// const getPostSuccess = createAction(GET_POST_SUCCESS);
// const getPostFailure = createAction(GET_POST_FAILURE);

// redux-thunk 를 쓸때의 구문
// export const getPost = postId => dispatch => {
// 	// 요청 시작 알림 - api 호출전
// 	dispatch(getPostPending());

// 	// 요청 시작 - promise 를 리턴
// 	return getPostApi(postId)
// 		.then(response => {
// 			// 응답을 GET_POST_SUCCESS 의 payload로 전달
// 			dispatch(getPostSuccess(response));

// 			return response;
// 		})
// 		.catch(error => {
// 			//  에러내용을 GET_POST_FAILURE 의 payload로 전달
// 			dispatch(getPostFailure(error));

// 			// 해당 에러를 throw를 하여 이함수를 수행한쪽에서 catch를 할 수 있게 한다.
// 			throw error;
// 		});
// };

// redux-promise 모듈 쓸때의 구문
export const getPost = postId => ({
	type: GET_POST,
	payload: getPostApi(postId)
});

// state 초기화
const initialState = fromJS({
	pending: false,
	error: false,
	data: {
		title: '',
		body: ''
	}
});

export default handleActions(
	{
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
