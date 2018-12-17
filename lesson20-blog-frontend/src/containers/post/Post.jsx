import React, { Component } from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class Post extends Component {
  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    const { PostActions, id, post } = this.props;

    try {
      console.log('api read go!');
      PostActions.getPost(id).then((res) => {
        console.log(res);
      });

      // console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { loading, post } = this.props;

    if (loading) return null; // 로딩 중일 때는 아무것도 보여주지 않음

    const { title, body, publishedDate, tags } = post.toJS();

    return (
      <div>
        <PostInfo title={title} publishedDate={publishedDate} tags={tags} />
        <PostBody body={body} />
      </div>
    );
  }
}

export default connect(
  state => ({
    post: state.post.get('post'),
    loading: state.pender.pending['post/GET_POST'] // 로딩상태
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(Post);

// Prop Types
Post.propTypes = {
  PostActions: PropTypes.object,
  id: PropTypes.string,
  loading: PropTypes.bool,
  post: PropTypes.object
};
