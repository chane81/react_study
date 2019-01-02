import React, { Component } from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class Base extends Component {
  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    // 로그인 상태 확인
  };

  render() {
    return (
      <div>
        <LoginModalContainer />
        {/* 전역적으로 사용하는 컴포넌트들이 있다면 여기에 랜더링 */}
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);
