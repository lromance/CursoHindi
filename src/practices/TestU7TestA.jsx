import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u7-testA';

const TestU7TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 7: Test A`} />;
};

export default TestU7TestA;