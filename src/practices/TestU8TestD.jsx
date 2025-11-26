import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u8-testD';

const TestU8TestD = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 8: Test D`} />;
};

export default TestU8TestD;