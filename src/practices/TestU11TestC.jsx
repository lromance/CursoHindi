import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u11-testC';

const TestU11TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 11: Test C`} />;
};

export default TestU11TestC;
