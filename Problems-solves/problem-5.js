/*
Frequency Counter - constructNote


Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/

function constructNote(message, letters) {
    var frequency = {};
    var frequencyM = {};
    for (let i = 0; i < letters.length; i++) {
        frequency[letters[i]] = ++frequency[letters[i]] || 1;
    }

    for (let i = 0; i < message.length; i++) {
        frequencyM[message[i]] = ++frequencyM[message[i]] || 1;
    }

    for (let k in frequencyM) {
        if (!frequency[k]) return false;
        if (frequencyM[k] > frequency[k]) return false;
    }
    return true;
}

console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true