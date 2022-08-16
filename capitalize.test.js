const capitalize = require('./capitalize');

test('Capitalize First Letter', () => {
  expect(capitalize('abcd')).toBe('Abcd');
  expect(capitalize('ABCD')).toBe('Abcd');
  expect(capitalize('Abcd')).toBe('Abcd');
});
