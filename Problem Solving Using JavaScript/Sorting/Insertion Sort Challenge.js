function insertionSort(arr, comparator) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (typeof comparator !== 'function') {
                if (arr[j+1] >= arr[j]) break;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            } else {
                if (comparator(arr[j+1], arr[j]) >= 0) break;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}