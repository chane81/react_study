/* Counter 컴포넌트의 액션들 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';
export const CREATE = 'CREATE';
export const REMOVE = 'REMOVE';

export const increment = (index) => ({
    type: INCREMENT,
    index
});

export const decrement = (index) => ({
    type: DECREMENT,
    index
});

export const setColor = ({index, color}) => ({
    type: SET_COLOR,
    index,
    color
});
/* Counter 컴포넌트의 액션들 */


/* Buttons 컴퍼넌트의 액션들 */
export const create = (color) => ({
    type: CREATE,
    color
});

export const remove = () => ({
    type: REMOVE
});
/* Buttons 컴퍼넌트의 액션들 */