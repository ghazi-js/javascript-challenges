/**  THE PROBLEM

 PRODUCT OF ARRAY

 write a function called productOfArray which takes in an array of numbers and returns the product of them all.


 Time: -,
 space: -,
 Sample Input:
 productOfArray([1, 2, 3]) // 6
 productOfArray([1, 2, 3, 10]) // 60

 */

/** UNDERSTAND THE PROBLEM

 My words: I should multiply (Product) all the items in the given array
 Input:    array of numbers, could be floats or intergers
 Output:   the product of the given array

 */


/** BREAK IT DOWN

 // sample example
 [1, 2, 3, 10]
 1 * [2, 3, 10]
 2 * [3, 10]
 3 * [10]
 10 * []
 1

 function productOfArray(arr) {
    // BASE CASE
        // when the array is empty
        return 1;

    // if I'm ganna use recursion, I should call the function back with an array
    // so here is the thing, shift value from the array and multiply it with the recursion call

    // RECURSION CALL
    return arr.shift() * productOfArray(arr);
}

 */


/** SOLVE / SIMPLIFY IT

 function productOfArray(arr) {
    if (!arr.length) return 0;
    return arr.shift() * productOfArray(arr);
}

 */



/** REFACTOR **/

function productOfArray(arr) {
    if (!arr.length) return undefined;
    if (arr.length == 1) return arr[0];
    return arr.shift() * productOfArray(arr);
}

// productOfArray([1, 2, 3]) // 6
// productOfArray([1, 2, 3, 10]) // 60
productOfArray([]) // 0