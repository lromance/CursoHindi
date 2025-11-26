import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u2-testA';

const TestU2TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 2: Test A`} />;
};

export default TestU2TestA;
