import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u1-testA';

const TestU1TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 1: Test A`} />;
};

export default TestU1TestA;
