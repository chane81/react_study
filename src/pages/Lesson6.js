import React, { Component } from 'react';
import ComponentIterationSample from 'components/lesson6/IterationSample';
import AsyncSetStateTest from 'components/lesson6/AsyncSetStateTest';

class Lesson6 extends Component {
    render() {
        return (
            <div>
                <ComponentIterationSample /><p/>
                <AsyncSetStateTest /><p/>
            </div>
        );
    }
}

export default Lesson6;