const reverseInteger = require("../reverseInteger");

test("reverseInteger test", () => {
  expect(reverseInteger(123)).toStrictEqual(321);
  
  expect(reverseInteger(-120)).toStrictEqual(-21);
});
