/*
Frequency Counter - validAnagram


Given two strings, write a function to determine if the second string is an anagram of the first.An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.


Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat", "car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat", "car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true