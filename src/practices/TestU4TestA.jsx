import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u4-testA';

const TestU4TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 4: Test A`} />;
};

export default TestU4TestA;