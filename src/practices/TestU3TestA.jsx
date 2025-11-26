import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u3-testA';

const TestU3TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 3: Test A`} />;
};

export default TestU3TestA;