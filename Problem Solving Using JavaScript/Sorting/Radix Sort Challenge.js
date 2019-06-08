function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(nums) {
    if (!nums.length) return 0;
    return digitCount(Math.max(...nums));
}

function radixSort(nums) {
    for (let k = 0; k < mostDigits(nums); k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// let result = radixSort([6, 8, 1, 12]);
// let result = radixSort([10, 100, 1, 1000, 10000000]);
let result = radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
console.log(result);