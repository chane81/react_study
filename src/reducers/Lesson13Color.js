import * as Types from '../actions/ActionTypes';

const initialState = {
    color: 'black'
};

const color = (state = initialState, action) => {
    switch(action.type)
    {
        case Types.SET_COLOR:
            return {
                color: action.color
            };
        default:
            return state;
    }
};

export default color;