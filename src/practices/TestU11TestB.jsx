import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u11-testB';

const TestU11TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 11: Test B`} />;
};

export default TestU11TestB;
