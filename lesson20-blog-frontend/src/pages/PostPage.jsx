import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Post from 'containers/post/Post';
import PropTypes from 'prop-types';
import AskRemoveModalContainer from 'containers/modal/AskRemoveModalContainer';

const PostPage = ({ match }) => {
  const { id } = match.params;

  return (
    <PageTemplate>
      <Post id={id} />
      <AskRemoveModalContainer />
    </PageTemplate>
  );
};

// Prop Types
PostPage.propTypes = {
  match: PropTypes.object
};

export default PostPage;
