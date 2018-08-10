import React, { Component } from 'react';

// 비동기 SetState 호출
class AsyncSetStateTest extends Component {
    state = {
        counter: 0
    }

    handlerClick = async (e) => {

        await this.setState({
            counter: this.state.counter + 1
        });

        await this.setState({
            counter: this.state.counter + 1
        });

        
        alert(this.state.counter);
    }

    render() {
        return (
            <div>
                <button onClick={this.handlerClick}>SetState 테스트</button>
            </div>
        );
    }
}

export default AsyncSetStateTest;