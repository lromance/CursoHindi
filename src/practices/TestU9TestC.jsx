import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u9-testC';

const TestU9TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 9: Test C`} />;
};

export default TestU9TestC;
