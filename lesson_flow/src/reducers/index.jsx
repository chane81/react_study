import reduceReducers from 'reduce-reducers';
import { default as Lesson13Reducers } from './lesson13/Reducers';

const rootReducers = reduceReducers(Lesson13Reducers);

export default rootReducers;
