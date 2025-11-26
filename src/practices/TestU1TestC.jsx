import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u1-testC';

const TestU1TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 1: Test C`} />;
};

export default TestU1TestC;
