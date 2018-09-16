import * as Types from '../../actions/ActionTypes';
import initialState from './InitialState'

const color = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default color;