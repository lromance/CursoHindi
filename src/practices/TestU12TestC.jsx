import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u12-testC';

const TestU12TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 12: Test C`} />;
};

export default TestU12TestC;
