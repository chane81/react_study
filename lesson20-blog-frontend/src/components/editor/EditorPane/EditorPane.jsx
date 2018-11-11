import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './EditorPane.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
class EditorPane extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={cx('editor-pane')}>
        <input
          className={cx('title')}
          placeholder="제목을 입력하세요"
          name="title"
        />
        <div className={cx('code-editor')} />
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input name="tags" placeholder="태그를 입력하세요 (쉼표로 구분)" />
        </div>
      </div>
    );
  }
}

// Component Export
export default EditorPane;
