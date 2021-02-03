const palindromeNumber = require("../palindromeNumber");

test("palindromeNumber test", () => {
  expect(palindromeNumber(123)).toBe(false);
  expect(palindromeNumber(-120)).toBe(false);
  expect(palindromeNumber(10)).toBe(false);
  expect(palindromeNumber(2233)).toBe(false);

  expect(palindromeNumber(121)).toBe(true);
  expect(palindromeNumber(22)).toBe(true);
  expect(palindromeNumber(333)).toBe(true);
  expect(palindromeNumber(131)).toBe(true);
  expect(palindromeNumber(22)).toBe(true);
  expect(palindromeNumber(4444)).toBe(true);
});
