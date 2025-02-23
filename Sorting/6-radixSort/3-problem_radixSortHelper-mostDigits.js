/*
Radix Sort Helper - mostDigits

Implement a function called mostDigits  which accepts an array of integers and returns a count of the number of digits for the number in the array with the most digits.

It may help to use your digitCount  code from the previous exercise in this function.

Examples

mostDigits([1, 9, 10, 100, 99]); // 3
mostDigits([100, 1010, 1, 500]); // 4
mostDigits([0, 100000, 400, 12, 8]); // 6
mostDigits([]); // 0
*/

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


console.log(mostDigits([1, 9, 10, 100, 99])); // 3
console.log(mostDigits([100, 1010, 1, 500])); // 4
console.log(mostDigits([0, 100000, 400, 12, 8])); // 6
console.log(mostDigits([])); // 0