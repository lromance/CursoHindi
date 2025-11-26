import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u4-testB';

const TestU4TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 4: Test B`} />;
};

export default TestU4TestB;