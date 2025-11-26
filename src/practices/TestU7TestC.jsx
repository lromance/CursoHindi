import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u7-testC';

const TestU7TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 7: Test C`} />;
};

export default TestU7TestC;