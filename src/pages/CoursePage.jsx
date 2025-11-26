import React from 'react';
import HtmlViewer from '../components/HtmlViewer';

export default function CoursePage() {
  return <HtmlViewer file={`${import.meta.env.BASE_URL}content/curso_completo.html`} />;
}
