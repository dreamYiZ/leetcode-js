/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (Math.abs(x) > 0x7fffffff) {
    return 0;
  }
  if (x > 0) {
    return parseInt(x.toString().split("").reverse().join(""));
  } else {
    return -parseInt((-x).toString().split("").reverse().join(""));
  }
};

module.exports = reverse;
