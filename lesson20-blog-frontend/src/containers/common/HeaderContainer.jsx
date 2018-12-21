import React, { Component } from 'react';
import Header from 'components/common/Header';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class HeaderContainer extends Component {
  handleRemove = () => {
    const dummy = '';
  };

  render() {
    const { handleRemove } = this;
    const { match } = this.props;
    const { id } = match.params;

    return <Header postId={id} onRemove={handleRemove} />;
  }
}

// Prop Types
HeaderContainer.propTypes = {
  match: PropTypes.object
};

export default withRouter(HeaderContainer);
