import React from 'react';
import { Link } from 'react-router-dom';
import { practiceManifest } from '../practice-manifest.js';

export default function PracticesPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Prácticas Interactivas</h1>
      <div className="space-y-4">
        {practiceManifest.map(practice => (
          <Link 
            key={practice.id} 
            to={`/practicas/${practice.id}`}
            className="block p-6 bg-slate-50 hover:bg-indigo-100 rounded-lg shadow-sm transition-colors border border-slate-200"
          >
            <h2 className="text-xl font-semibold text-indigo-700">{practice.title}</h2>
            <p className="text-gray-600 mt-1">{practice.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}