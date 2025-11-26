import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u6-testB';

const TestU6TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 6: Test B`} />;
};

export default TestU6TestB;
