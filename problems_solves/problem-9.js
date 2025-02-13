/*
Frequency Counter / Multiple Pointer - findPair


Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
Part 1 - solve this with the following requirements:

Time Complexity Requirement - O(n)

Space Complexity Requirement - O(n)

Part 2 - solve this with the following requirements:

Time Complexity Requirement - O(n log n)

Space Complexity Requirement - O(1)
*/

// o(n) Space + O(n) time
function findPair(arr, n) {
    var s = new Set(arr.map((e) => Math.abs(e - n)));
    if (n === 0 && s.size === arr.length) return false;
    for (let i = 0; i < arr.length; i++) {
        if (s.has(arr[i])) return true;
    }
    return false;
}


// o(1) Space + o(n log n) time
function findPair(arr, num) {
    arr.sort((a, b) => a - b);
    let i = 0;
    let j = 1;
    while (i < arr.length && j < arr.length) {
        if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
            return true
        }
        else if (arr[j] - arr[i] < num) {
            j++
        }
        else {
            i++
        }
    }
    return false;
}

findPair([6, 1, 4, 10, 2, 4], 2) // true
findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1) // true
findPair([4, -2, 3, 10], -6) // true
findPair([6, 1, 4, 10, 2, 4], 22) // false
findPair([], 0) // false
findPair([5, 5], 0) // true
findPair([-4, 4], -8) // true
findPair([-4, 4], 8) // true
findPair([1, 3, 4, 6], -2) // true
findPair([0, 1, 3, 4, 6], -2) // true