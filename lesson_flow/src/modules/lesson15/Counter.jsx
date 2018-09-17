import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';

const INCREMENT = 'lesson15/INCREMENT';
const DECREMENT = 'lesson15/DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export const incrementAsync = () => dispatch => {
	setTimeout(() => dispatch(increment()), 1000);
};

export const decrementAsync = () => dispatch => {
	setTimeout(() => dispatch(decrement()), 1000);
};

const initialState = fromJS({
	num: 1
});

export default handleActions(
	{
		[INCREMENT]: (state, action) => {
			return state.set('num', state.get('num') + 1);
		},
		[DECREMENT]: (state, action) => initialState
	},
	initialState
);
