import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u12-testD';

const TestU12TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 12: Test D`} />;
};

export default TestU12TestD;
