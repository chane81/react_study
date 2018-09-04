//import reduceReducers from 'reduce-reducers';
import { default as Lesson14Input } from './lesson14/Input';
import { default as Lesson14Todos } from './lesson14/Todos';
import { combineReducers } from 'redux';

//const rootReducers = reduceReducers({ Lesson14Input, Lesson14Todos });
const rootReducers = combineReducers({
	input: Lesson14Input,
	todos: Lesson14Todos
});

export default rootReducers;
