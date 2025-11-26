import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u4-testC';

const TestU4TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 4: Test C`} />;
};

export default TestU4TestC;