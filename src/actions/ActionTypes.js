/* Counter 컴포넌트의 액션들 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';
/* Counter 컴포넌트의 액션들 */

export const increment = () => ({
    type: INCREMENT    
});

export const decrement = () => ({
    type: DECREMENT
});

export const setColor = (color) => ({
    type: SET_COLOR,
    color
});
