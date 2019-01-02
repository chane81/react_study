import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginModal from 'components/modal/LoginModal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as baseActions from 'store/modules/base';

class LoginModalContainer extends Component {
  handleLogin = () => {};

  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('login');
  };

  handleChange = (e) => {};

  handleKeyPress = (e) => {};

  render() {
    const { handleLogin, handleCancel, handleChange, handleKeyPress } = this;
    const { visible } = this.props;

    return (
      <LoginModal
        onLogin={handleLogin}
        onCancel={handleCancel}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        visible={visible}
      />
    );
  }
}

// Prop Types
LoginModalContainer.propTypes = {
  visible: PropTypes.bool,
  BaseActions: PropTypes.object
};

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'login'])
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);
