import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {
    static defaultProps = {
        name: '기본이름'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    render() {
        return (
            <div>
                <p>안녕하세요. 제이름은 { this.props.name } 입니다.</p>
                <p>저는 { this.props.age }살 입니다.</p>
            </div>
        );
    }
}

export default HelloWorld;