import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u5-testC';

const TestU5TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 5: Test C`} />;
};

export default TestU5TestC;