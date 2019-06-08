function pivot(arr, comparator, start = 0, end = arr.length-1) {
    let pivotIdx = start;
    for (let i = start; i <= end; i++) {
        if (typeof comparator !== 'function') {
            if (arr[start] > arr[i]) {
                [arr[pivotIdx+1], arr[i]] =  [arr[i], arr[pivotIdx+1]];
                pivotIdx++;
            }
        } else {
            if (comparator(arr[start], arr[i]) > 0) {
                [arr[pivotIdx+1], arr[i]] =  [arr[i], arr[pivotIdx+1]];
                pivotIdx++;
            }
        }
    }
    [arr[pivotIdx], arr[start]] =  [arr[start], arr[pivotIdx]];
    console.log(pivotIdx);
    console.log(arr);
    return pivotIdx;
}

const arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
const arr2 = [8, 4, 2, 4, 0, 10, 11, 12, 13, 16];
const arr3 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
// ['Blue', 'LilBub', 'Garfield', 'Heathcliff', 'Grumpy']
function strLength(a, b) {
    return a.length - b.length;
}

// pivot(arr1); // 3
// pivot(arr2); // 4
// pivot(arr3, strLength); // 1