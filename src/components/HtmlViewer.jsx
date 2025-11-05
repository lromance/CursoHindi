import React, { useState, useEffect } from 'react';

const HtmlViewer = ({ file }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch(file)
      .then(response => response.text())
      .then(text => setHtmlContent(text))
      .catch(error => console.error("Error loading HTML file:", error));
  }, [file]);

  return (
    <div className="html-content-viewer" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HtmlViewer;