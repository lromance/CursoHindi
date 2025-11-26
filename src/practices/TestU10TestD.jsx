import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u10-testD';

const TestU10TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 10: Test D`} />;
};

export default TestU10TestD;
