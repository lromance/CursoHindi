import React from 'react';
import TestMcqTemplate from './TestMcqTemplate';
import { questions } from './data/test-u8-testC';

const TestU8TestC = () => {
  return <TestMcqTemplate questions={questions} title={`Unidad 8: Test C`} />;
};

export default TestU8TestC;