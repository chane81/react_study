import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
// 지원할 코드 형식 들을 불러옵니다.
// http://prismjs.com/#languages-list 참조
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-css.min';
import styles from './MarkdownRender.scss';

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
  state = {
    html: ''
  };

  constructor(props) {
    super(props);
    const { markdown } = props;

    // 서버사이드 렌더링에서도 마크다운 처리가 되도록 constructor 쪽에서도 구현
    this.state = {
      html: markdown
        ? marked(props.markdown, {
          breaks: true,
          sanitize: true
        })
        : ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { markdown } = this.props;
    const { html } = this.state;

    // markdown 값이 변경되면 renderMarkdown 을 호출
    if (prevProps.markdown !== markdown) {
      this.renderMarkdown();
    }

    // state 가 바뀌면 코드 하이라이팅
    if (prevState.html !== html) {
      Prism.highlightAll();
    }
  }

  renderMarkdown = () => {
    const { markdown } = this.props;

    // 마크다운이 존재하지 않는다면 공백처리
    if (!markdown) {
      this.stateState({
        html: ''
      });
      return;
    }

    this.setState({
      html: marked(markdown, {
        breaks: true, // 일반 엔터로 새 줄 입력
        sanitize: true // 마크다운 내부 html 무시
      })
    });
  };

  render() {
    const { html } = this.state;

    // React에서 html 을 렌더링하려면 객체를 만들어 내부에
    // __html 값을 설정해야 함
    const markup = {
      __html: html
    };

    return (
      <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup} />
    );
  }
}

// Prop Types
MarkdownRender.propTypes = {
  markdown: PropTypes.string
};

export default MarkdownRender;
