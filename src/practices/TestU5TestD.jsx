import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u5-testD';

const TestU5TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 5: Test D`} />;
};

export default TestU5TestD;