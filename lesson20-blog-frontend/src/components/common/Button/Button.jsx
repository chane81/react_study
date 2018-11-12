import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.scss';

const cx = classNames.bind(styles);

const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Button = ({ children, to, onClick, disabled, theme = 'default' }) => {
  const Element = to && !disabled ? Link : Div;

  return (
    <Element
      to={to}
      className={cx('button', theme, {
        disabled
      })}
      onClick={disabled ? () => null : onClick}
    >
      {children}
    </Element>
  );
};

// Prop Types
Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string
};

export default Button;
