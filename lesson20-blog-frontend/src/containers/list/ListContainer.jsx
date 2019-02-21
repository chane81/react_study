import React, { Component } from 'react';
import PostList from 'components/list/PostList';
import Pagination from 'components/list/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';
import PropTypes from 'prop-types';

class ListContainer extends Component {
  componentDidMount() {
    this.getPostList();
  }

  componentDidUpdate(prevProps) {
    const { page, tag } = this.props;

    // 페이지/태그가 바뀔때 리스트를 다시 불러옴
    if (prevProps.page !== page || prevProps.tag !== tag) {
      this.getPostList();

      // 스크롤바를 맨 위로 올림
      document.documentElement.scrollTop = 0;
    }
  }

  getPostList = () => {
    // 페이지와 태그 값을 부모에게서 받아옴
    const { tag, page, ListActions } = this.props;
    ListActions.getPostList({
      page,
      tag
    });
  };

  render() {
    const { loading, posts, page, lastPage, tag } = this.props;

    // 로딩중에는 아무것도 안보이게 하기
    if (loading) return null;

    return (
      <div>
        <PostList posts={posts} />
        <Pagination page={page} lastPage={lastPage} tag={tag} />
      </div>
    );
  }
}

// Prop Types
ListContainer.propTypes = {
  tag: PropTypes.string,
  page: PropTypes.number,
  lastPage: PropTypes.number,
  posts: PropTypes.object,
  loading: PropTypes.bool,
  ListActions: PropTypes.object
};

export default connect(
  state => ({
    lastPage: state.list.get('lastPage'),
    posts: state.list.get('posts'),
    loading: state.pender.pending['list/GET_POST_LIST']
  }),
  dispatch => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(ListContainer);
