import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u9-testA';

const TestU9TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 9: Test A`} />;
};

export default TestU9TestA;
