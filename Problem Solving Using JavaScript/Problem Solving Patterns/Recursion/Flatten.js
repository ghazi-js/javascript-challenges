/** 
    Flatten

    Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

    Sample:
        flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
        flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
        flatten([[1],[2],[3]]) // [1,2,3]
        flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
*/


/** UNDERSTAND THE PROBLEM

    
    My words: Given array of arrays I should return an array of all values flattend
    Input:    array of arrays
    Output:   array of all values flatten

*/


/** BREAK IT DOWN

function flatten(arr) {
    
}

*/


/** SOLVE / SIMPLIFY IT ***/

function flatten(arr) {
    let newArr = [];
    for (item of arr) {
        if (Array.isArray(item)) 
            newArr = newArr.concat(flatten(item));
        else
            newArr.push(item);
    }
    return newArr;
}


flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]