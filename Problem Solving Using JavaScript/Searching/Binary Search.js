/**

 Binary Search Exercise

 Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

 This algorithm should be more efficient than linearSearch - you can read how to implement it here
 - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

 Examples:

 binarySearch([1, 2, 3, 4, 5], 2) // 1
 binarySearch([1, 2, 3, 4, 5], 3) // 2
 binarySearch([1, 2, 3, 4, 5], 5) // 4
 binarySearch([1, 2, 3, 4, 5], 6) // -1
 binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
 */

/** BREAK IT DOWN

 function binarySearch(arr, val) {
    // define a start index
    // define an end index
    // define a middle index
    // loop throuhg the array
        // if the middle value equals to the given value
            // return the middle index
        // else if the middle value > given value
            // calculate new middle index => middle = Math.ceil(middle / 2) and continue
        // else if the middle value < given value
            // calculate new middle index => Math.ceil(end + middle / 2)

    // return -1 if doesn't find any
}

 */


/** SOLVE / SIMPLIFY IT **/

function binarySearch(arr, val) {
    let start   = 0;
    let end     = arr.length - 1;
    let middle  = Math.ceil((end + start) / 2);

    while (start < end) {
        if (arr[middle] > val) {
            end = middle;
            middle = Math.ceil((end + start) / 2);
        } else if (arr[middle] < val) {
            start = middle;
            middle = Math.ceil((end + start) / 2);
        } else {
            return middle;
        }
    }

    return -1;
}

// binarySearch([1, 2, 3, 4, 5], 2) // 1
// binarySearch([1, 2, 3, 4, 5], 3) // 2
// binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
console.log('found at', binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2