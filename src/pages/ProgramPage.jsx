import React from 'react';
import HtmlViewer from '../components/HtmlViewer';

export default function ProgramPage() {
  return <HtmlViewer file={`${import.meta.env.BASE_URL}content/programacion.html`} />;
}
