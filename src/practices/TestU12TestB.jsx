import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u12-testB';

const TestU12TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 12: Test B`} />;
};

export default TestU12TestB;
