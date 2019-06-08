/**  THE PROBLEM

 POWER

 write a function called power which accept a base and exponent, The function should return the power of the base to the exponent.
 This function should mimic the functionality of the Math.pow() - DON'T WORRY about negative and bases and exponents.

 Time: -,
 space: -,
 Sample Input:
 power(2, 0) // 1
 power(2, 2) // 4
 power(2, 4) // 16
 */

/** UNDERSTAND THE PROBLEM


 My words: Mimic the functionality of Math.pow()
 Input:    two numbers, the base and exponent
 Output:   the result of the calculation

 */


/** BREAK IT DOWN

 function power(base, exponent) {

    // to make recursion function I need a base case

    // BREAK THE IDEA DOWN
    // I should multiply the number with itself as much as the exponent
    // so I should call the function itself power(base, exponent - 1)

    // when the exponent === 1 return the result

    // and I need to call the function itself without end up with stackoverflow

    if (exponent === 0) return 1;
    if (base === 0) return 0;
    if (exponent === 1) return base;

    return base * power(base, exponent -1);

}

 */


/** SOLVE / SIMPLIFY IT

 function power(base, exponent) {
    if (base === 0) return 0;
    if (exponent === 0) return 1;

    if (exponent === 1) return base;

    return base * power(base, exponent - 1);
}
 */


/** REFACTOR */

function power(base, exponent) {
    if (base === 0) return 0;
    if (exponent === 0) return 1;

    return base * power(base, exponent - 1);
}

// power(2, 0) // 1
// power(0, 4) // 0
// power(2, 2) // 4
// power(2, 4) // 16
// power(10, 4) // 10000
