/**  THE PROBLEM

 Write a function called isSubsequence which takes in two strings which checks whether the characters in the first string come from
 a subsequence of the characters in the second string.
 In other words the function should check if the characters in the first string appear somewhere in the second string,
 without thier order changing.

 Time: O(n + m),
 space: O(1),
 Sample Input:
 isSubsequence('hello', 'hello word') // true
 isSubsequence('sing', 'string') // true
 isSubsequence('abc', 'abracadabra') // true
 isSubsequence('abc', 'acb') // false (order matters)

 */

/** UNDERSTAND THE PROBLEM


 My words: I should check whether the characters of the first string exists in the same order in the second string,
 the order matters but it's fine if there is other characters in the middle of the characters we are searching of
 Input:    two params, (1) search value, (2) the string that we searching in
 Output:   Boolean, true if found, false if not or (not the same order)

 */


/** BREAK IT DOWN

 function isSubsequence(searchValue, str) {

    // I GOT IT, HERE'S THE SOLUTION WHICH WE GANNA FOLLOW

    // I have to put two pointers (i, j) the (i) points to the first string, and (j) points to the second string

    let i = 0;
    let j = 0;

    // the base case is the length of the second string, (the big one)
    while(j < str) {

        if searchValue[i] is equal to str[j]
            if (i == searchValue.length - 1) return true
            increment i and j to check for the next value
        else if searchValue[i] it's not equal to str[j]
            increment j to check for the next character in the second string
    }

    // return false if you reach here
}

 */


/** SOLVE / SIMPLIFY IT */

function isSubsequence(searchValue, str) {

    if (!searchValue.length || !str.length) return false;

    let i = 0;
    let j = 0;

    while(j < str.length) {

        if (searchValue[i] === str[j]) {
            if (i === searchValue.length - 1) return true;
            i++;
        }
        j++;
    }

    return false;
}

// isSubsequence('hello', 'hello word') // true
// isSubsequence('sing', 'string') // true
// isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false (order matters)