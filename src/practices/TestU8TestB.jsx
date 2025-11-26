import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u8-testB';

const TestU8TestB = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 8: Test B`} />;
};

export default TestU8TestB;
