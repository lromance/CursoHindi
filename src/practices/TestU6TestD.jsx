import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u6-testD';

const TestU6TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 6: Test D`} />;
};

export default TestU6TestD;
