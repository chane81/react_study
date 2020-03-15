import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './EditorTemplate.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
class EditorTemplate extends React.Component {
  state = {
    leftPercentage: 0.5
  };

  // separator 클릭 후 마우스를 움직이면 그에 따라 leftPencentage 업데이트
  handleMouseMove = (e) => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    });
  };

  // 마우스를 뗐을 때 등록한 이벤트 제거
  handleMouseUp = () => {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };

  // separator 클릭할 때
  handleSeparatorMouseDown = () => {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };

  render() {
    const { header, editor, preview } = this.props;
    const { leftPercentage } = this.state;
    const { handleSeparatorMouseDown } = this;

    // 각 영역에 flex 값 적용
    const leftStyle = {
      flex: leftPercentage
    };

    const rightStyle = {
      flex: 1 - leftPercentage
    };

    // separator 위치 설정
    const separatorStyle = {
      left: `${leftPercentage * 100}%`
    };

    return (
      <div className={cx('editor-template')}>
        {header}
        <div className={cx('panes')}>
          <div className={cx('pane', 'editor')} style={leftStyle}>
            {editor}
          </div>
          <div className={cx('pane', 'preview')} style={rightStyle}>
            {preview}
          </div>
          <div
            className={cx('separator')}
            style={separatorStyle}
            onMouseDown={handleSeparatorMouseDown}
          />
        </div>
      </div>
    );
  }
}

// Prop Types
EditorTemplate.propTypes = {
  header: PropTypes.element,
  editor: PropTypes.element,
  preview: PropTypes.element
};

// Component Export
export default EditorTemplate;