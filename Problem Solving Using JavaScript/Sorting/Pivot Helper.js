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

// pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]);
// pivot([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]);
pivot([5, 4, 9, 10, 2, 20, 8, 7, 3]);