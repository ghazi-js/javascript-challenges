/**  THE PROBLEM
    
    Stringify Numbers
    
    Write a function called stringifyNumbers which takes in an object and 
    finds all of the values which are numbers and converts them to strings
    Recursion would be a great way to solve this!
   
    Time: ,
    space: ,
    Sample Input:
        
    stringifyNumbers(obj)

    {
        num: "1",
        test: [],
        data: {
            val: "4",
            info: {
                isRight: true,
                random: "66"
            }
        }
    }    
         
*/

/** UNDERSTAND THE PROBLEM
    
    My words: I should find all the numbers in the given object and stringify them
    Input:    an object
    Output:   an object where all the numbers are stringified

*/


/** BREAK IT DOWN

function stringifyNumbers(obj) {
    // loop through the object keys
        // take the values of the object
        // if the value is a number stringify it by assigning
        // if it's an object call the function recursifly
        // else continue

    // return the obj
}

*/


/** SOLVE / SIMPLIFY IT **

function stringifyNumbers(obj, obj2 = {}) {
    for (let key in obj) {
        if (isObject(obj[key]))
            obj2[key] = stringifyNumbers(obj[key]);
        else if (typeof obj[key] === 'number' && isFinite(obj[key]))
            obj2[key] = String(obj[key]);
        else 
            obj2[key] = obj[key];
    }
    return obj2;
}

*/

/** REFACTORING ** */

function stringifyNumbers(obj, obj2 = {}) {
    for (let key in obj) {
        let item = obj[key];
        if (isObject(item))
            obj2[key] = stringifyNumbers(item);
        else if (typeof item === 'number' && isFinite(item))
            obj2[key] = String(item);
        else 
            obj2[key] = item;
    }
    return obj2;
}

// Returns if a value is an object
function isObject (value) {
    return typeof value === 'object' && value !== null && value.constructor === Object;
}


obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)
