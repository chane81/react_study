import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
import styles from './EditorPane.scss';

// 마크다운 문법 색상
import 'codemirror/mode/markdown/markdown';

// 마크다운 내부에 들어가는 코드 색상
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

// CodeMirror를 위한 CSS 스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
class EditorPane extends Component {
  // 데이터 ref
  editor = null;

  // CodeMirror 인스턴스
  codeMirror = null;

  componentDidMount() {
    this.initializeEditor();
  }

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true, // 왼쪽에 라인 넘버 띄우기
      lineWrapping: true // 내용이 너무 길면 다음 줄에 작성
    });
  };

  render() {
    return (
      <div className={cx('editor-pane')}>
        <input
          className={cx('title')}
          placeholder="제목을 입력하세요"
          name="title"
        />
        <div
          className={cx('code-editor')}
          ref={(ref) => {
            this.editor = ref;
          }}
        />
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
