// Write a function called isSubsequence which takes in two strings and checks whether the characters 
// in the first string form a subsequence of the characters in the second string. In other words,
// the function should check whether the characters in the first string appear somewhere in the second
// without their order changing

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    str1 = str1.split('');
    str2 = str2.split('');
    let left = 0;
    let right = str2.length - 1;
    while(left < right) {
        if(str1[left] === str2[left]) {
            left++;
        } else {
            str2.splice(left, 1);
        }
    }
    return str1.length === str2.length ? true : false;
    // return (str1 = str1.join('')) === (str2 = str2.join('')) ? true : false;
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)




// COURSE SOLUTION

// iterative
// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;
// }

// Recursive but not O(1) Space
// function isSubsequence(str1, str2) {
//     if (str1.length === 0) return true
//     if (str2.length === 0) return false
//     if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
//     return isSubsequence(str1, str2.slice(1))
// }