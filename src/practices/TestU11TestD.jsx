import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u11-testD';

const TestU11TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 11: Test D`} />;
};

export default TestU11TestD;
