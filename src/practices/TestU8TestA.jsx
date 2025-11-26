import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u8-testA';

const TestU8TestA = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 8: Test A`} />;
};

export default TestU8TestA;
