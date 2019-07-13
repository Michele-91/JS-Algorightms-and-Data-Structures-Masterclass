// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution must have the following complexities: Time: 0(N);


function sameFrequency(one, two) {

    if (one < 0 || two < 0) {
        return false;
    }

    one = one.toString().split('');
    two = two.toString().split('');

    let digits1 = {};
    let digits2 = {};
    for (let val of one) {
        digits1[val] = (digits1[val] || 0) + 1;
    }
    for (let val of two) {
        digits2[val] = (digits2[val] || 0) + 1;
    }
    for (let key in digits1) {
        if (!(key in digits2)) {
            return false;
        }
        if (digits1[key] !== digits2[key]) {
            return false;
        }
    }
    return true;
}

// sameFrequency(182, 281) // true;
// sameFrequency(34, 14) // false;
// sameFrequency(3589578, 5879385) // true;
// sameFrequency(22, 222) // false;



// Course solution

// function sameFrequency(num1, num2) {
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if (strNum1.length !== strNum2.length) return false;

//     let countNum1 = {};
//     let countNum2 = {};

//     for (let i = 0; i < strNum1.length; i++) {
//         countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }

//     for (let j = 0; j < strNum1.length; j++) {
//         countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }

//     for (let key in countNum1) {
//         if (countNum1[key] !== countNum2[key]) return false;
//     }

//     return true;
// }