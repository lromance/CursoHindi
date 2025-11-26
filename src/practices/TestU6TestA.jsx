import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u6-testA';

const TestU6TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 6: Test A`} />;
};

export default TestU6TestA;
