/*
Frequency Counter / Multiple Pointers - areThereDuplicates


Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

*/

function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2));// true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true


//Multiple Pointers
/*function areThereDuplicates(...args) {
    args.sort((a, b) => {
        if (a < b) return - 1;
        if (a > b) return 1;
        return 0;
    });
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2));// true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
*/