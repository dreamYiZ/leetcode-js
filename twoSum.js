/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         // console.log(`i:${i};j:${j}`);
//         // console.log(`i:${nums[i]};j:${nums[j]}`);
//         return [i, j];
//       }
//     }
//   }
// };

// Runtime: 84 ms, faster than 35.28% of JavaScript online submissions for Two Sum.
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var j = nums.indexOf(target - nums[i]);
    if (j === -1 || j === i) {
    } else {
      return [i, j];
    }
  }
};


module.exports = twoSum;
