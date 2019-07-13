// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target
// average. There may be more than one pair that matches the average target.
// Time: O(N)
// Space: O(N)

function averagePair(arr, target) {
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = arr.length - 1;
    let average;
    while(left < right) {
        average = (arr[left] + arr[right]) / 2;
        console.log(arr[left], arr[right]);
        if(average === target) {
            return true;
        } else if (average > target) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

// console.log(averagePair([1,2,3],2.5)); //true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
// console.log(averagePair([], 4)); // false



// COURSE SOLUTION 

// function averagePair(arr, num) {
//     let start = 0
//     let end = arr.length - 1;
//     while (start < end) {
//         let avg = (arr[start] + arr[end]) / 2
//         if (avg === num) return true;
//         else if (avg < num) start++
//         else end--
//     }
//     return false;
// }