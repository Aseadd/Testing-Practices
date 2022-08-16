const reverseString = require('./reverse-string');

test('reverese of abc ', () => {
  expect(reverseString('abc')).toBe('cba');
});
