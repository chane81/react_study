import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './MyComponent.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const Button = ({ propVal }) => {
  const myVal = propVal;

  return <div>MyComponent {myVal}</div>;
};

// Prop Types
Button.propTypes = {
  propVal: PropTypes.string,
};

// Component Export
export default Button;
