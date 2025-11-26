import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u12-testA';

const TestU12TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 12: Test A`} />;
};

export default TestU12TestA;
