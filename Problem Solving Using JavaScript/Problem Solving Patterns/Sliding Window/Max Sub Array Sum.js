/**  THE PROBLEM

   Max Sub Array Sum

   Given an array of integers and numbers, write a function called maxSubarraySum, which finds a maximum sum of a sub array with the 
   length of the number passed to the function

   Note that a sub array must consist of a consecutive elements from the original array.
   In the first example bellow [100, 200, 300] is a sub array of the original array, but [100, 300] is not.

    Time:  O(n),
    space: 1,
    Sample Input:
        maxSubarraySum([100, 200, 300, 400], 2); // 700
        maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
        maxSubarraySum([-3, 4, 0, 1, -1, 4, -2, 1], 2); // 5
        maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
        maxSubarraySum([2, 3], 3); // null
*/

/** UNDERSTAND THE PROBLEM
    
    My words: walkthrough the given array and find maxSubarraySum for the sub array limit given
    Input:    array, sub array limit
    Output:   maximum sum, or null when (array is empty, the limit greater than the length of the array)

*/


/** BREAK IT DOWN

function maxSubarraySum(arr, slide) {
    // Since we need the max of the consecutive then we ganna use SLIDING WINDOW PATTERN

    // Here is the thing
    - we take a sub array of the given array
        - we loop over it and get the max
        - and take the total of it
    - now we have the total
    - then I'm ganna loop over the array from where I left it (num)
        - now I'm ganna sum the next item and subtract the prev item and store the sum in other variable
        - take the max between the total and the current total
        - store the bigger one to the total

    - reuturn the total
}

*/


/** SOLVE / SIMPLIFY IT **/

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;

    for (let i = 0; i < num; i++) {
        total += arr[i];
    }

    let max = total;
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i-num];
        if (currentTotal > max) max = currentTotal;
    }

    return max;
}

// maxSubarraySum([100, 200, 300, 400], 2); // 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null