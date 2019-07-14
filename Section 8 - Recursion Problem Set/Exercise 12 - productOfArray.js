// Write a function called productOfArray which takes in an
// array of numbers and returns the product of them all

function productOfArray(arr) {
    
    let product = 1;
    function helperFunc(input) {
        if(input.length === 0) return product;
        product *= input[0];
        helperFunc(input.slice(1));
    }
    helperFunc(arr);
    return product;
}

// console.log(productOfArray([1,2,3])); // 6
// console.log(productOfArray([1,2,3,10])); // 60



// COURSE SOLUTION

// function productOfArray(arr) {
//     if (arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }