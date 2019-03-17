import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditorPane from 'components/editor/EditorPane';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';

class EditorPaneContainer extends Component {
  handleChangeInput = ({ name, value }) => {
    const { EditorActions } = this.props;

    EditorActions.changeInput({
      name,
      value
    });
  };
  
  render() {
    const { title, tags, markdown } = this.props;
    const { handleChangeInput } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        onChangeInput={handleChangeInput}
      />
    );
  }
}

// Prop Types
EditorPaneContainer.propTypes = {
  EditorActions: PropTypes.object,
  title: PropTypes.string,
  tags: PropTypes.string,
  markdown: PropTypes.string
};

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);
