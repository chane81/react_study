
import * as Types from '../actions/ActionTypes';
import initialState from './Lesson13InitialState'

const createRemove = (state = initialState, action) => {
    const { counters } = state;

    switch(action.type)
    {
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
        default:
            return state;
    }
};

export default createRemove;