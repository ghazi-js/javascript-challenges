function pivot(arr, start = 0, end = arr.length-1) {
    let pivotIdx = start;
    for (let i = start; i <= end; i++) {
        if (arr[start] > arr[i]) {
            [arr[pivotIdx+1], arr[i]] =  [arr[i], arr[pivotIdx+1]];
            pivotIdx++;
        }
    }
    [arr[pivotIdx], arr[start]] =  [arr[start], arr[pivotIdx]];
    return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, arr.length - 1);
    }
    return arr;
}

// quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]);
// quickSort([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]);
// quickSort([5, 4, 9, 10, 2, 20, 8, 7, 3]);
let result = quickSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 75, 67, 4343, 32]);

console.log(result);