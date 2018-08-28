import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/ActionTypes';
import CounterList from '../components/lesson13/CounterList';
import Buttons from '../components/lesson13/Buttons';
import getRandomColor from '../lib/getRandomColor';


/* 카운터 디스패치, 커넥스 */
 const mapStateToProps = (state) => ({
     counters: state.counters
 });


const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
         const color = getRandomColor();
         dispatch(actions.setColor({index, color}));
     }
});

const ConnectCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);
/* 카운터 디스패치, 커넥스 */


/* 버튼 디스패치, 커넥트 */
const mapToDispatchButtons = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove()),
});

const ConnectButtons = connect(
    null,
    mapToDispatchButtons
)(Buttons);
/* 버튼 디스패치, 커넥트 */

export default () => {
    return (
      <div>
        <ConnectButtons></ConnectButtons>
        <ConnectCounter></ConnectCounter>
      </div>
    )
  }