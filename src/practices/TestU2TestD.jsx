import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u2-testD';

const TestU2TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 2: Test D`} />;
};

export default TestU2TestD;
