function merge(arr1, arr2, comparator) {
    let arr = [];
    let first = 0;
    let second = 0;

    while (first < arr1.length && second < arr2.length) {
        if (typeof comparator !== 'function') {
            if (arr1[first] < arr2[second])
                arr.push(arr1[first++]);
            else
                arr.push(arr2[second++]);
        } else {
            if (comparator(arr1[first], arr2[second]) < 0)
                arr.push(arr1[first++]);
            else
                arr.push(arr2[second++]);

        }
    }

    while (first < arr1.length)
        arr.push(arr1[first++]);

    while (second < arr2.length)
        arr.push(arr2[second++]);

    return arr;
}

function mergeSort(arr, comparator) {
    if (arr.length <= 1) return arr;

    let middle  = Math.floor(arr.length / 2);
    let left    = mergeSort(arr.slice(0, middle), comparator);
    let right   = mergeSort(arr.slice(middle), comparator);

    return merge(left, right, comparator);
}

function findPair(arr, value) {

    if (!arr.length) return false;

    arr = mergeSort(arr);

    let first   = 0;
    let second    = 1;

    while (first < arr.length && second < arr.length) {

        let dif = arr[second] - arr[first];

        if (first !== second && dif === value)
            return true;
        else if (dif < value)
            second++;
        else
            first++;
    }

    return false;
}

let result = findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
console.log(result);