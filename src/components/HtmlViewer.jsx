import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import './HtmlViewer.css';

const HtmlViewer = ({ file }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch(file)
      .then(response => response.text())
      .then(text => {
        // Hack: Scope the CSS styles to avoid affecting the global body/navbar
        // We replace 'body {' with '.html-content-viewer-scope {' in the style blocks
        const scopedText = text
          .replace(/body\s*{/g, '.html-content-viewer-scope {')
          .replace(/body\s*,/g, '.html-content-viewer-scope,');
        setHtmlContent(scopedText);
      })
      .catch(error => console.error("Error loading HTML file:", error));
  }, [file]);

  // Handle anchor links behavior
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const id = href.substring(1);
        const element = containerRef.current.querySelector(`#${id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleAnchorClick);
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleAnchorClick);
      }
    };
  }, [htmlContent]);

  // Handle Scroll to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div 
        ref={containerRef}
        className="html-content-viewer html-content-viewer-scope" 
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
      {showScrollTop && (
        <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Volver arriba">
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default HtmlViewer;