import * as Types from '../actions/ActionTypes'

const initialState = {
    color: 'black',
    number: 0
}

function counter(state = initialState, action) {
    switch (action.type) {
        case Types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case Types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        case Types.SET_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state;
    }    
};

export default counter;

