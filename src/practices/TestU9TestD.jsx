import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u9-testD';

const TestU9TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 9: Test D`} />;
};

export default TestU9TestD;
