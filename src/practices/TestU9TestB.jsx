import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u9-testB';

const TestU9TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 9: Test B`} />;
};

export default TestU9TestB;
