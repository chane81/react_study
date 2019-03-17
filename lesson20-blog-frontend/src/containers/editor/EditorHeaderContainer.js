import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditorHeader from 'components/editor/EditorHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';
import { Set } from 'immutable';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { EditorActions, location } = this.props;

    // 에디터 초기화
    EditorActions.initialize();

    // 쿼리 파싱
    const { id } = queryString.parse(location.search);
    if (id) {
      // id가 존재하면 포스트 불러오기
      EditorActions.getPost(id);
    }
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  handleSubmit = async () => {
    const { title, markdown, tags, EditorActions, history, location } = this.props;
    const post = {
      title,
      body: markdown,
      
      // 태그 텍스트를 ,로 분리시키고 앞뒤 공백을 지운 후 중복되는 값을 제거해줍니다.
      tags: tags === "" ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
    };

    try {
      const { id } = queryString.parse(location.search);
      if(id) {
        await EditorActions.editPost({
          id,
          ...post
        });
        history.push(`/post/${id}`);
        return;
      } 
      await EditorActions.writePost(post);

      // writePost 이후 생성된 postId 를 가져오기 위해 맨위에 레퍼런스로 선언하지 않음
      history.push(`/post/${this.props.postId}`);
    } catch (e) {
      console.log(e);
    }
  }

    
  render() {
    const { handleGoBack, handleSubmit } = this;
    const { id } = queryString.parse(this.props.location.search);

    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
        isEdit={!!id}
      />
    );
  }
}

// Prop Types
EditorHeaderContainer.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.string,
  markdown: PropTypes.string,
  postId: PropTypes.string,
  EditorActions: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.string
};

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    postId: state.editor.get('postId')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
  // history 사용을 위해 withRouter 로 감쌈
)(withRouter(EditorHeaderContainer));
