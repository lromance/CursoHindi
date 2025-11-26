import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u1-testD';

const TestU1TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 1: Test D`} />;
};

export default TestU1TestD;
