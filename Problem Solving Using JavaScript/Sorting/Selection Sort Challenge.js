function selectionSort(arr, comparator) {
    for (let start = 0; start < arr.length; start++) {
        let min = start;
        for (let i = start; i < arr.length; i++) {
            if (typeof comparator !== 'function') {
                if (arr[i] < arr[min])
                    min = i;
            } else {
                if (comparator(arr[i], arr[min]) < 0)
                    min = i;
            }
        }
        [arr[start], arr[min]] = [arr[min], arr[start]];
    }
    return arr;
}