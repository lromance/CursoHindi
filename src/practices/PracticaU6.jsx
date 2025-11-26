import React from 'react';
import PracticeTemplate from './PracticeTemplate';
import { questions } from './data/practica-u6';

const PracticaU6 = () => {
  return <PracticeTemplate questions={questions} title={`Unidad 6: Práctica Final`} />;
};

export default PracticaU6;