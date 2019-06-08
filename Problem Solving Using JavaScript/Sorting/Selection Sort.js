function selectionSort(arr) {
    for (let start = 0; start < arr.length; start++) {
        let min = start;
        for (let i = start; i < arr.length; i++) {
            if (arr[i] < arr[min])
                min = i;
        }
        [arr[start], arr[min]] = [arr[min], arr[start]];
    }
    return arr;
}