import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u4-testD';

const TestU4TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 4: Test D`} />;
};

export default TestU4TestD;