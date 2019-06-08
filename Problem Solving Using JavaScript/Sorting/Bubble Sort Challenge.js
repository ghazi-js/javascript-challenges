function bubbleSort(arr, comparator) {
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i -1 ; j++) {
            if (typeof comparator !== 'function') {
                if (arr[j] <= arr[j + 1]) continue;
            } else {
                if (comparator(arr[j], arr[j+1]) <= 0) continue;
            }
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            noSwap = false;
        }
        if (noSwap) break;
    }
    return arr;
}