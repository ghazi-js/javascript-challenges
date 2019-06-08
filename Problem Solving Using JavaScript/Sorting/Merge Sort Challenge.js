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

// mergeSort([4, 20, 12, 10, 7, 9]);
// mergeSort([0, -10, 7, 4]);
// mergeSort(1, 2, 3);
// mergeSort([]);
// const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 75, 67, 4343, 32];
// mergeSort(nums);
//
//
const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
}

mergeSort(kitties, strComp);
//
//
// const moarKittyData = [
//     { name: 'LilBub', age: 7 },
//     { name: 'Garfield', age: 40 },
//     { name: 'Heathcliff', age: 45 },
//     { name: 'Blue', age: 1 },
//     { name: 'Grumpy', age: 6 }
// ]
//
// function oldestToYoungest(a, b) {
//     return b.age - a.age;
// }
//
// mergeSort(moarKittyData, oldestToYoungest);