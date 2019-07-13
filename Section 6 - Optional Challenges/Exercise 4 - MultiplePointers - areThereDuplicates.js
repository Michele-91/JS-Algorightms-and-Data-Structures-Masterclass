// Implement a function called areThereDuplicates, which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in. You can solve
// this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...arr) {
    // good luck. (supply any arguments you deem necessary.)
    let i = 0;
    let j = arr.length - 1;
    while (j > i) {
        // console.log(arr[j], arr[i]);
        if (arr[j] === arr[i]) {
            return true;
        } else {
            if (j == i + 1) {
                j = arr.length - 1;
                i++;
            } else {
                j--;
            }
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true




// COURSE SOLUTIONS

//frequency counter
// function areThereDuplicates() {
//     let collection = {}
//     for (let val in arguments) {
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for (let key in collection) {
//         if (collection[key] > 1) return true
//     }
//     return false;
// }

// // Multiple Pointers
// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a, b) => a > b);
//     let start = 0;
//     let next = 1;
//     while (next < args.length) {
//         if (args[start] === args[next]) {
//             return true
//         }
//         start++
//         next++
//     }
//     return false
// }

// //One Liner Solution
// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }