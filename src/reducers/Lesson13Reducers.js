import number from './Lesson13Number';
import color from './Lesson13Color';
import createRemove from './Lesson13CreateRemove';
import reduceReducers from 'reduce-reducers';
import initialState from './Lesson13InitialState';

//import * as Types from '../actions/ActionTypes'
//import { combineReducers } from 'redux'

/* 리듀서들 병합 - combineReducers 를 씀, 리듀서들간에 state 공유안됨 */
//  const reducers = combineReducers({
//      numberData: number,
//      colorData: color,
//      createRemoveData: createRemove
// });

// state 자원의 리듀서간에 공유를 하기 위해 reduce-reducers 를 써서 리듀서를 병합함, 리듀서를 실무에서는 분리시켜서 쓰는 경우가 많으므로 아래 로직을 써봄
const reducers = reduceReducers(number, color, createRemove, initialState);


// 아래는 하나의 리듀서 함수안에 모든 액션에 대한 리듀서 로직이 있는 경우
/*
const initialState = {
    counters: [
        {
            number: 0,
            color: 'black'
        }
    ]
};

function reducers(state = initialState, action)
{
    const { counters } = state;
    
    switch(action.type)
    {
        case Types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case Types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        number: 0,
                        color: action.color
                    }
                ]
            };
        case Types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };
            case Types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case Types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        default:
            return state;
    }
};
*/

export default reducers;