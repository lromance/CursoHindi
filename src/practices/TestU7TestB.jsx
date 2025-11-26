import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u7-testB';

const TestU7TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 7: Test B`} />;
};

export default TestU7TestB;