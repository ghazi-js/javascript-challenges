/**
    Nested Even Sum

    Write a recursive function called nestedEvenSum. 
    Return the sum of all even numbers in an object which may contain nested objects.
*/

/** BREAK IT DOWN

function nestedEvenSum (obj) {
  // get object values
  // loop through values
  // if the value is an object call the function recursivly
  // if the value is a number and the number is even
    // take the sum of those numbers

  // return the sum
}

*/

/** SOLVE / SIMPLIFY IT

sum = 0;
function nestedEvenSum(obj) {
  // get object values
  if (!(obj instanceof Object)) return 0;

  for (let item of Object.values(obj)) {
      if (item instanceof Object) return nestedEvenSum(item);
      if (typeof item == 'number' && item % 2 == 0)
        sum += item;
  }
}
*/


/** REVACTORING */ 

function nestedEvenSum(obj, sum = 0) {

    for (let key in obj) {
        if (typeof obj[key] === 'object')
          sum += nestedEvenSum(obj[key]);
        else if (typeof obj[key] === 'number' && obj[key] % 2 === 0)
          sum += obj[key];
    }
    
    return sum;
  }
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  // nestedEvenSum(obj1); // 6
  
  nestedEvenSum(obj2); // 10