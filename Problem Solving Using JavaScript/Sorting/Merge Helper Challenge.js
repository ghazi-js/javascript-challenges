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
            if (comparator(arr1[first], arr2[second]) >= 0)
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

function stringLengthComparator(a, b) {
    return b.length - a.length;
}

// console.log(merge([1, 3, 4, 5], [2, 4, 6, 8])); // numbers
// console.log(merge([-2, -1, 0, 4, 5, 6], [-3, -2, -1, 2, 3, 5, 7, 8])); // numbers
console.log(merge(['Bob', 'Ethel', 'Christine'], ['M', 'Colt', 'Allison', 'SuperLongNameOMG'], stringLengthComparator)); // string length