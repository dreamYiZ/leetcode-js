// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var palindromeNumber = function (x) {
//   if (x < 0) {
//     return false;
//   }
//   var arr = x.toString().split("");
//   var l = arr.length;
//   var hl;
//   if (l % 2 === 0) {
//     hl = l / 2;
//     var n = 0;
//     console.log(arr);
//     while (arr[hl - 1 - n]) {
//       if (arr[hl - 1 - n] === arr[hl + n]) {
//         n++;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     hl = Math.floor(l / 2) + 1;
//     var n = 1;
//     console.log(arr);
//     while (arr[hl - 1 - n]) {
//       if (arr[hl - 1 - n] === arr[hl - 1 + n]) {
//         n++;
//       } else {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var palindromeNumber = function (x) {
//   if (x < 0) {
//     return false;
//   }
//   x = x.toString();
//   for (var i = 0, l = x.length; i < l/2; i++) {
//     if (x[i] === x[l - i - 1]) {
//     } else {
//       return false;
//     }
//   }

//   return true;
// };

/**
 * @param {number} x
 * @return {boolean}
 */
var palindromeNumber = function (x) {
  if (x < 0) {
    return false;
  }
  x = x.toString();
  return (
    x.substring(0, x.length / 2) ===
    x
      .substring(x.length / 2 + (x.length % 2 !== 0))
      .split("")
      .reverse()
      .join("")
  );
};

module.exports = palindromeNumber;
