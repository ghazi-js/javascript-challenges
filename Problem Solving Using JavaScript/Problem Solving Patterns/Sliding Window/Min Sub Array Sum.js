/**  THE PROBLEM

   Min Sub Array Length

   Wtire a function called minSubArrayLen, which accepts two paramenters - an array of positive integers and a positive integer,
   This function should return the minimal length of contiguous subarray of which the sum is greater than or equal to the integer
   passed to the function. if there isn't one return 0

    Time: O(n),
    space: O(1),
    Sample Input:
        minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 because [3, 4] is the smallest subarray
        minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 because [5, 4] is the smallest subarray
        minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 because [62] is greater than 52
        minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
        minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
        minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
        minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
*/

/** UNDERSTAND THE PROBLEM

    My words: I should minimal sub array length where its sum equal to the given positive integer
    Input:    2 params: array of positive integers (arr), positive integer (num)
    Output:   the length of the subarray

*/


/** BREAK IT DOWN

function minSubArrayLen(arr, num) {
    // Since the subarray should be a contiguous, I can use SLIDING WINDOW Pattern

    // How I can implement it?
        - I can loop through the array, take the sum of the next index
            - if the sum is greater than the given number subtract the i - 1
            - if the sum is less than the given number add the next index to the sum
            - if the sum is equal to the num hold the length of the subarray and continue
            - try to get the minimal length by continue until reach the last index of the array

    // return the result
}

*/


/** SOLVE / SIMPLIFY IT ** */

function minSubArrayLen(arr, num) {
    // Since the subarray should be a contiguous, I can use SLIDING WINDOW Pattern
/*
        // How I can implement it?

            // declarations
            - start with two pointers one at the first index
            - we need also minLength variable which holds the minimal length of the sub array
            - and we need variable to hold the current length of the array (len)
            - and we need to track the sumation of the current subarray

            // quick return
            if array.length == 0 return 0;
            if there is no subarray is greater than or equal the given number return 0
            if one number is greater than or equal the given number return 1


            // base case
            when the end equal array.length-1 and equals to start

            // start the logic
            is the sum >= given number ?
                yes: 
                    is the length == 1 ? return 1
                    is the length < minLength ? yes: minLen = length
                    start++;
                    sum -= arr[start];
                    length--;
                no:
                    end++;
                    sum += arr[end];
                    length++;
                
            if the minLnegth == Infinity return 0
            else return minLnegth
*/

    if (!arr.length) return 0;

    let start   = 0;
    let end     = 0;
    let sum     = arr[start];
    let len     = 1;
    let minLen  = Infinity;

    while(start !== end || end < arr.length) {

        if (sum >= num) {
            if (len == 1) return 1;
            if (len < minLen) minLen = len;
            sum -= arr[start++];
            len--;
        } else {
            if (end == arr.length - 1 && len == 1) break;
            sum += arr[++end];
            len++;
        }  

    }

    return (minLen == Infinity) ? 0 : minLen;
}

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 because [3, 4] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 because [5, 4] is the smallest subarray
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 because [62] is greater than 52
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0