import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u6-testC';

const TestU6TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 6: Test C`} />;
};

export default TestU6TestC;