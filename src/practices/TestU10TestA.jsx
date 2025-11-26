import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u10-testA';

const TestU10TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 10: Test A`} />;
};

export default TestU10TestA;
