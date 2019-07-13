
// function factorial(num) {
//     let total = 1;
//     for( let i = 0; i < num; i++) {
//         total *= i;
//     }
//     return total;
// }

function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

factorial(5);