import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u1-testB';

const TestU1TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 1: Test B`} />;
};

export default TestU1TestB;
