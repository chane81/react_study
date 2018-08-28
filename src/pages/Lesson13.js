import Counter from '../components/lesson13/Counter';
import * as actions from '../actions/ActionTypes';
import { connect } from 'react-redux';

// 13가지 색상 중 랜덤으로 선택하는 함수
export function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6',
        '#1098ad',
        '#0ca678',
        '#37b24d',
        '#74b816',
        '#f59f00',
        '#f76707',
    ];

    const random = Math.floor(Math.random() * 13);

    return colors[random];
}

const mapStateToProps = (state) => ({
    number: state.numberData.number,
    color: state.colorData.color
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
         const color = getRandomColor();
         dispatch(actions.setColor(color));
     }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

// class Lesson13 extends Component {
    
//     render() {
//         return (
//             <div>
//                 <Counter />
//             </div>
//         );
//     }
// }

export default CounterContainer;