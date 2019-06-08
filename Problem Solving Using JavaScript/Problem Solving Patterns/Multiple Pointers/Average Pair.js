/**  THE PROBLEM

 Write a function called averagePair. Given a sorted array of integers and a target value
 determine if there is a pair of values in the array where the average of the pair equals the target average,
 They maybe more than one pair that matches the average target,

 Time: O(n),
 space: O(1),
 Sample Input:
 averagePair([1, 2, 3], 2.5); // true
 averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
 averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
 averagePair([], 4); // false
 */

/** UNDERSTAND THE PROBLEM

 [n1, n2] // this is a pair

 My words: I should found pair in the given array that the average of the pair equals the given second param
 Input:    2 param, (1) sorted array, (2) target average of the pair
 Output:   Boolean

 */


/** BREAK IT DOWN

 function averagePair(arr, targetAvg) {
    // if the given array is empty return false

    // TO MORE EFFICIENT YOU CAN REMOVE THE DUPLICATES FROM THE ARRAY USING MULTIPLE POINTERS SICNE IT'S SORTED

    // LOOP THROUGH THE ARRAY AND SEE IF THERE IS A PAIR THAT THE AVERAGE OF IT EQUALS TARGET AVERAGE
    // I'LL USE MULTIPLE POINTERS PATTERN
    // One pointer at the FIRST index and another goes at the LAST index
    // the base case where the first < last
        // if the average of the two numbers is greater than targetAvg move the last index
            // check after decrement the last index if the value is duplicate with the prev
        // if the average of the two numbers is lowest than targetAvg move the first index
            // check after increment the first index if the value is duplicate with the prev
        // if the average of the two numbers is equal to targetAvg return true (for test return the pair)


    return false if not found any pair that equals the target average
}

 */


/** SOLVE / SIMPLIFY IT */

function averagePair(arr, targetAvg) {

    if (!arr.length) return false;

    let first   = 0;
    let last    = arr.length - 1;

    while (first < last) {

        let avg = (arr[first] + arr[last]) / 2;

        if (avg === targetAvg)
            return true;
        else if (avg > targetAvg)
            last--;
        else
            first++;
    }

    return false;
}

averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false