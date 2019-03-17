import React, { Component } from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import { inform } from 'lib/shouldCancel';

class Base extends Component {
  componentDidMount() {
    this.initialize();
    inform();
  }
  
  initialize = () => {
    // 로그인 상태 확인
    const { BaseActions } = this.props;

    // checkLogin() 에서 pending 상태중일때는 로그인상태를 못가져오므로
    // localStorage 에서 로그인 상태를 잠시 가져옴
    if(localStorage.logged === "true") {
      BaseActions.tempLogin();
    }
    BaseActions.checkLogin();
  }

  render() {
    return (
      <div>
        <LoginModalContainer/>
        {/* 전역적으로 사용하는 컴포넌트들이 있다면 여기에 랜더링 */}
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);
