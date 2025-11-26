import React from 'react';
import { Link } from 'react-router-dom';
import { practiceManifest } from '../practice-manifest.js';
import './PracticesPage.css'; // Import the new CSS file

export default function PracticesPage() {
  return (
    <div className="practices-container">
      <h1 className="home-page h1">Prácticas Interactivas</h1>
      <ul className="practices-grid">
        {practiceManifest.map(practice => (
          <li key={practice.id} className={practice.type === 'recopilatorio' ? 'full-width-item' : ''}>
            <Link
              to={`/practicas/${practice.id}`}
              className={`practice-card ${practice.colorClass}`}
            >
              <h2>{practice.icon} {practice.title}</h2>
              <p>{practice.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}