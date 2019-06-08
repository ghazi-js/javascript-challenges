/** Merge sort helper */

// MERGE TWO SORTED ARRAYS

/** SOLVE / SIMPLIFY IT */

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
console.log(merge([1, 3, 4, 5], [2, 4, 6, 8]));