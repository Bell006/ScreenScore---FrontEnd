import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';

import { Container } from './styles';
import { useTheme } from 'styled-components';

export function TextArea({ onContentChange }) {
  const editorRef = useRef(null);
  const theme = useTheme();

  const handleEditorChange = (content, editor) => {
    onContentChange(content);
  }

  return (
    <Container>
      <Editor
        apiKey="1wwhf3ehu50wslmpflwh7tuy7da008gvrxpcpv7h4ox34ri3"
        onEditorChange={handleEditorChange}
        placeHolder="O que você tem a dizer sobre o filme?"
        init={{
        selector: 'textarea',
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: `
            body {
              font-family: Helvetica, Arial, sans-serif;
              font-size: 14px;
              resize: none;
              height: 15rem;
              margin-bottom: 0.8rem;
              border-radius: 1rem;
              padding: 1.6rem;
              border: none;
              background-color: ${theme.COLORS.BACKGROUND_900};
              color: ${theme.COLORS.WHITE};
            }
            p {
              margin: 10px 0;
            }
          `,
        }}
      />
    </Container>
  );
}

