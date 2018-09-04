import { fromJS } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// [리듀서 - DUCK 구조]
// 초기 STATE
const initialState = fromJS([
	{
		id: 0,
		text: '리액트 공부하기',
		done: true
	},
	{
		id: 1,
		text: '컴포넌트 스타일링 해보기',
		done: false
	}
]);

// ACTION TYPE 선언
const INSERT = 'lesson14/INSERT';
const TOGGLE = 'lesson14/TOGGLE';
const REMOVE = 'lesson14/REMOVE';

// ACTION 생성
export const insert = createAction(INSERT, ({ id, text, done }) => ({
	id,
	text,
	done
}));
export const toggle = createAction(TOGGLE, index => index);
export const remove = createAction(REMOVE, index => index);

// 리듀서 생성
export default handleActions(
	{
		[INSERT]: (state, action) => {
			const { id, text, done } = action.payload;

			return state.push(fromJS({ id, text, done }));
		},
		[TOGGLE]: (state, action) => {
			const id = action.payload;
			const index = state.findIndex(item => item.get('id') === id);

			return state.update(index, item =>
				item.set('done', !item.get('done'))
			);
		},
		[REMOVE]: (state, action) => {
			const id = action.payload;
			const index = state.findIndex(item => item.get('id') === id);

			return state.delete(index);
		}
	},
	initialState
);
