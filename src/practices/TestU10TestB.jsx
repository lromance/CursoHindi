import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u10-testB';

const TestU10TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 10: Test B`} />;
};

export default TestU10TestB;
