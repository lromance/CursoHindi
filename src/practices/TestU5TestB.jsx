import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u5-testB';

const TestU5TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 5: Test B`} />;
};

export default TestU5TestB;