import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u3-testB';

const TestU3TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 3: Test B`} />;
};

export default TestU3TestB;