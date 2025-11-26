import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u11-testA';

const TestU11TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 11: Test A`} />;
};

export default TestU11TestA;
