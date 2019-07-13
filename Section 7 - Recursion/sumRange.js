
function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRamge(num - 1);
}

sumRange(3);