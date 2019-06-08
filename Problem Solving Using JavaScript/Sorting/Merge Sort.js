function merge(arr1, arr2) {
    let arr = [];
    let first = 0;
    let second = 0;

    while (first < arr1.length && second < arr2.length) {
        if (arr1[first] < arr2[second])
            arr.push(arr1[first++]);
        else
            arr.push(arr2[second++]);
    }

    while (first < arr1.length)
        arr.push(arr1[first++]);

    while (second < arr2.length)
        arr.push(arr2[second++]);

    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let middle  = Math.floor(arr.length / 2);
    let left    = mergeSort(arr.slice(0, middle));
    let right   = mergeSort(arr.slice(middle));

    return merge(left, right);
}

// mergeSort([4, 20, 12, 10, 7, 9]);
// mergeSort([0, -10, 7, 4]);
// mergeSort(1, 2, 3);
// mergeSort([]);
// const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 75, 67, 4343, 32];
// mergeSort(nums);