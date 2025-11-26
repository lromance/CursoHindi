import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u10-testC';

const TestU10TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 10: Test C`} />;
};

export default TestU10TestC;
