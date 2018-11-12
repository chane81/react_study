import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import EditorPane from 'components/editor/EditorPane';
import PreviewPane from 'components/editor/PreviewPane';

const EditorPage = () => (
  <EditorTemplate
    header={<EditorHeader />}
    editor={<EditorPane />}
    preview={<PreviewPane />}
  />
);

export default EditorPage;
