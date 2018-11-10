import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import styles from './EditorHeader.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

const EditorHeader = ({ onGoBack, onSubmit }) => (
  <div className={cx('editor-header')}>
    <div className={cx('back')}>
      <Button onClic={onGoBack} theme="outline">
        뒤로가기
      </Button>
    </div>
    <div className={cx('submit')}>
      <Button onClick={onSubmit} theme="outline">
        작성하기
      </Button>
    </div>
  </div>
);

// Prop Types
EditorHeader.propTypes = {
  onGoBack: PropTypes.func,
  onSubmit: PropTypes.func
};

export default EditorHeader;
