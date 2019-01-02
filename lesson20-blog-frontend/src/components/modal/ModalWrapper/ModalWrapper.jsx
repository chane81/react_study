import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ModalWrapper.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
class ModalWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    visible: PropTypes.bool
  };

  state = {
    animate: false
  };

  componentDidUpdate(prevProps, prevState) {
    const { visible } = this.props;

    if (prevProps.visible !== visible) {
      this.startAnimation();
    }
  }

  startAnimation = () => {
    // animate 값을 true 로 설정 후
    this.setState({
      animate: true
    });

    // 250ms 이후 다시 false 로 설정
    setTimeout(() => {
      this.setState({
        animate: false
      });
    }, 250);
  };

  render() {
    const { children, visible } = this.props;
    const { animate } = this.state;

    if (!visible && !animate) return null;

    // 상태에 따라 애니메이션 설정
    const animation = animate && (visible ? 'enter' : 'leave');

    return (
      <div>
        <div className={cx('gray-background', animation)} />
        <div className={cx('modal-wrapper')}>
          <div className={cx('modal', animation)}>{children}</div>
        </div>
      </div>
    );
  }
}

// Component Export
export default ModalWrapper;
