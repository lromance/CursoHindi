import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { practiceManifest } from '../practice-manifest.js';

const PracticeDetailPage = () => {
  const { practiceId } = useParams();
  const practice = practiceManifest.find(p => p.id === practiceId);

  if (!practice) {
    return <div>Práctica no encontrada.</div>;
  }

  const PracticeComponent = practice.component;

  return (
    <div>
      <Suspense fallback={<div className='text-center p-10'>Cargando práctica...</div>}>
        <PracticeComponent />
      </Suspense>
    </div>
  );
};

export default PracticeDetailPage;
