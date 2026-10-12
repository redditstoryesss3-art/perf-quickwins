import test from 'node:test';
import assert from 'node:assert/strict';
import { findUniqueValues } from '../src/duplicateDetector.js';

test('findUniqueValues returns values that appear only once', () => {
  const values = ['a', 'b', 'a', 'c', 'd', 'd', 'e'];
  assert.deepEqual(findUniqueValues(values), ['b', 'c', 'e']);
});

test('findUniqueValues keeps order for unique values', () => {
  const values = [1, 2, 3, 2, 4, 5, 5, 6];
  assert.deepEqual(findUniqueValues(values), [1, 3, 4, 6]);
});
