import { Map, List, fromJS } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// [리듀서 - DUCK 구조]
// 초기 STATE
const initialState = fromJS({
	value: ''
});

// ACTION TYPE 선언
const SET_INPUT = 'lesson14/SET_INPUT';

// ACTION 생성
export const setInput = createAction(SET_INPUT, value => value);

// 리듀서 생성
export default handleActions(
	{
		[SET_INPUT]: (state, action) => {
			return state.set('value', action.payload);
		}
	},
	initialState
);
