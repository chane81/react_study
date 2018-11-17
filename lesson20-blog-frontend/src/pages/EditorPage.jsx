import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer';

const EditorPage = () => (
  <EditorTemplate
    header={<EditorHeader />}
    editor={<EditorPaneContainer />}
    preview={<PreviewPaneContainer />}
  />
);

export default EditorPage;
