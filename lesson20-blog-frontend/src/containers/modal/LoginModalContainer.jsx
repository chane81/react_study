import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginModal from 'components/modal/LoginModal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as baseActions from 'store/modules/base';

class LoginModalContainer extends Component {
  handleLogin = async () => {
    const { BaseActions, password } = this.props;
    try {
      // 로그인 시도, 성공하면 모달 닫기
      await BaseActions.login(password);
      BaseActions.hideModal('login');
      localStorage.logged = 'true';
    } catch (e) {
      console.log(e);
    }
  };

  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('login');
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInput(value);
  };

  handleKeyPress = (e) => {
    // 엔터키를 누르면 로그인 호출
    if (e.key === 'Enter') {
      this.handleLogin();
    }
  };

  render() {
    const { handleLogin, handleCancel, handleChange, handleKeyPress } = this;
    const { visible, error, password } = this.props;

    return (
      <LoginModal
        onLogin={handleLogin}
        onCancel={handleCancel}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        visible={visible}
        error={error}
        password={password}
      />
    );
  }
}

// Prop Types
LoginModalContainer.propTypes = {
  visible: PropTypes.bool,
  error: PropTypes.bool,
  password: PropTypes.string,
  BaseActions: PropTypes.object
};

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'login']),
    password: state.base.getIn(['loginModal', 'password']),
    error: state.base.getIn(['loginModal', 'error'])
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);
