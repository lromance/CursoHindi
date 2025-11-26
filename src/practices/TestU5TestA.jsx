import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u5-testA';

const TestU5TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 5: Test A`} />;
};

export default TestU5TestA;