import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u7-testD';

const TestU7TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 7: Test D`} />;
};

export default TestU7TestD;