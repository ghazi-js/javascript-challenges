/**
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

 Your solution MUST have the following complexities:
 Time: O(N)

 Sample Input:

 sameFrequency(182, 281)         // true
 sameFrequency(34, 14)           // false
 sameFrequency(3589578, 5879385) // true
 sameFrequency(22, 222)          // false
 */

/** Understand the problem
 *
 * myWords: check if the two givien integers numbers have the same occurece of digits
 * Input:    two positive integers
 * Output:   Boolean
 * the output can determine from the input
 *
 */

/** Walkthrough

 function sameFrequency(n1, n2) {
    // stringify the two numbers
    let x = String(n1)
    let y = String(n2)

    // define the frequency object
    let freq = {};

    // if not equal length return false
    if (x.length !== y.length) return false;

    // save each character and it's freq in freq object
    for (let char of x)
        freq[char] = ++freq[char] || 1;

    // check for each second string's char
    for (let char of y) {
        // if exists in the object and it's freq greater than zero
        if (freq1[char] && freq1[char] > 0)
            freq1[char]--;
        else
            return false;
    }

    return true if it's all right
}

 */


function sameFrequency(n1, n2) {
    let x = String(n1);
    let y = String(n2);

    if (x.length !== y.length) return false;

    let freq = {};

    for (let char of x)
        freq[char] = ++freq[char] || 1;

    for (let char of y) {
        if (freq[char] && freq[char] > 0)
            freq[char]--;
        else
            return false;
    }

    return true;
}


sameFrequency(34, 14);