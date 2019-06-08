function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(nums) {
    if (!nums.length) return 0;
   return digitCount(Math.max(...nums));
}

// mostDigits([1, 9, 10, 100, 99]); // 3
// mostDigits([100, 1010, 1, 500]); // 4
// mostDigits([0, 100000, 400, 12, 8]); // 6
// console.log(mostDigits([])); // 6

// digitCount(0); // 1
// digitCount(1); // 1
// digitCount(9); // 1
// digitCount(25); // 2
// digitCount(314); // 3
// digitCount(42342); // 5
