const stringLength = require('./string-Length');
const str = 'abc';

test('string length of abc', () => {
  expect(stringLength(str)).toBe(str.length);
});

test('exception for string', () => {
  expect(stringLength(str)).not.toEqual(0);
  expect(stringLength(str)).not.toBeGreaterThan(10);
});
