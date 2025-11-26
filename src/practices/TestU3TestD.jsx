import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u3-testD';

const TestU3TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 3: Test D`} />;
};

export default TestU3TestD;