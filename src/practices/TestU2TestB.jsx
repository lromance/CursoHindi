import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u2-testB';

const TestU2TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 2: Test B`} />;
};

export default TestU2TestB;
