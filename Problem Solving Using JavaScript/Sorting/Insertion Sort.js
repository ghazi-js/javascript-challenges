function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j+1] >= arr[j]) break;
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
    return arr;
}