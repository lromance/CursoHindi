import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u3-testC';

const TestU3TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 3: Test C`} />;
};

export default TestU3TestC;