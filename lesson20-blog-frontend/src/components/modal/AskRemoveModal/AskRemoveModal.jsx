import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button';
import styles from './AskRemoveModal.scss';

// css 클래스 네임 바인딩
const cx = classNames.bind(styles);

// Component 작성
const AskRemoveModal = ({ visible, onConfirm, onCancel }) => (
  <ModalWrapper visible={visible}>
    <div className={cx('question')}>
      <div className={cx('title')}>포스트 삭제</div>
      <div className={cx('description')}>
        이 포스트를 정말로 삭제하시겠습니까?
      </div>
    </div>
    <div className={cx('options')}>
      <Button theme="gray" onClick={onCancel}>
        취소
      </Button>
      <Button onClick={onConfirm}>삭제</Button>
    </div>
  </ModalWrapper>
);

// Prop Types
AskRemoveModal.propTypes = {
  visible: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func
};

// Component Export
export default AskRemoveModal;
