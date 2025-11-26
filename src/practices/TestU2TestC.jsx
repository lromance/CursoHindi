import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u2-testC';

const TestU2TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 2: Test C`} />;
};

export default TestU2TestC;
