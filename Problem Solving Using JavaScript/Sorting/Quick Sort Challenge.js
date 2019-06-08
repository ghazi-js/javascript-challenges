function pivot(arr, comparator, start = 0, end = arr.length-1) {
    let pivotIdx = start;
    for (let i = start; i <= end; i++) {
        if (typeof comparator !== 'function') {
            if (arr[start] > arr[i]) {
                [arr[pivotIdx+1], arr[i]] = [arr[i], arr[pivotIdx+1]];
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
    return pivotIdx;
}

function quickSort(arr, comparator, left = 0, right = arr.length -1) {
    if (left < right) {
        let pivotIdx = pivot(arr, comparator, left, right);
        quickSort(arr, comparator, left, pivotIdx - 1);
        quickSort(arr, comparator, pivotIdx + 1, arr.length - 1);
    }
    return arr;
}


// quickSort([4, 20, 12, 10, 7, 9]);
// quickSort([0, -10, 7, 4]);
// quickSort([1, 2, 3]);
// quickSort([]);
// quickSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 75, 67, 4343, 32]);


const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
}

// quickSort(kitties, strComp);

const moarKittyData = [
    { name: 'LilBub', age: 7 },
    { name: 'Garfield', age: 40 },
    { name: 'Heathcliff', age: 45 },
    { name: 'Blue', age: 1 },
    { name: 'Grumpy', age: 6 }
];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

let result = quickSort(moarKittyData, oldestToYoungest);

console.log(result);