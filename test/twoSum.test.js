const twoSum = require('../twoSum');

test('twoSum test', () => {
  expect(twoSum([2,3,4], 7)).toStrictEqual([1,2]);
  expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
});