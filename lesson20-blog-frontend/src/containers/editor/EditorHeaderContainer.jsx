import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditorHeader from 'components/editor/EditorHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';
import { Set } from 'immutable';
import { withRouter } from 'react-router-dom';

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { EditorActions } = this.props;

    // 에디터 초기화
    EditorActions.initialize();
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleSubmit = async () => {
    const { title, tags, markdown, EditorActions, history } = this.props;
    const post = {
      title,
      body: markdown,
      tags:
        tags === '' ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
    };

    try {
      await EditorActions.writePost(post);

      // writePost 이후 생성된 postId 를 가져오기 위해 맨위에 레퍼런스로 선언하지 않음
      const { postId } = this.props;
      history.push(`/post/${postId}`);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { handleGoBack, handleSubmit } = this;

    return <EditorHeader onGoBack={handleGoBack} onSubmit={handleSubmit} />;
  }
}

// Prop Types
EditorHeaderContainer.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.string,
  markdown: PropTypes.string,
  postId: PropTypes.string,
  EditorActions: PropTypes.object,
  history: PropTypes.object
};

export default connect(
  state => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    postId: state.editor.get('postId')
  }),
  dispatch => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
  // history 사용을 위해 withRouter 로 감쌈
)(withRouter(EditorHeaderContainer));
