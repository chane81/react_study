import number from './Lesson13Number';
import color from './Lesson13Color';
import { combineReducers } from 'redux'

/* 리듀서들 합치기 */
const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;