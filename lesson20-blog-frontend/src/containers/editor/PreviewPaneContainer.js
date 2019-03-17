import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PreviewPane from 'components/editor/PreviewPane';

const PreviewPaneContainer = ({ markdown, title }) => (
  <PreviewPane title={title} markdown={markdown} />
);

// Prop Types
PreviewPaneContainer.propTypes = {
  markdown: PropTypes.string,
  title: PropTypes.string
};

export default connect(state => ({
  title: state.editor.get('title'),
  markdown: state.editor.get('markdown')
}))(PreviewPaneContainer);
