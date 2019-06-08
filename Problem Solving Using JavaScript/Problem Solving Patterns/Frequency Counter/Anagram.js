/*** Anagram => match two words characters ***/

/** Understand what the problem is:
* 1- my own words: match two words / length / characters count
* 2- Inputs : two strings (lowered case, alphabet)
* 3- Outputs : boolean (true if matched)
* 4- Can the output determine from the input? Yes, with frequency count pattern
*/ 

/** Concrete Examples
* 'ghazi', 'iazgh'      // true
* 'anagram', 'anagram'  // true
* '', ''                // true
* 'car', 'cat'          // false
* 'ga', 'gas'           // false
*/

/** Break it down
    function anagram(str1, str2) {
        // if not equal length              // return false
        // if the two strings are equal     // return true
        
        // set frequency count object for the first string 
        // set frequency count object for the first string

        // loop through the first string and set the key to char and it's count
        // loop through the second string and set the key to char and it's count

        // loop through the first string
            // if the key not exists in the second frequency count object                           // return false
            // if the count for this key not identical to the count for second frequency count key  // return false

        // if it's alright return true
    }
*/

/** Solve it / Simplify */
/*
    function anagram(str1, str2) {
        // if not equal length              // return false
        if (str1.length !== str2.length) return false;

        // if the two strings are equal     // return true
        if (str1.length === 0 && str2.length === 0) return true;

        // set frequency count object for the first and second string 
        let freqCount1 = {};
        let freqCount2 = {};

        // loop through the first string and set the key to char and it's count
        for (let char of str1)
            freqCount1[char] = ++freqCount1[char] || 1;
        // loop through the second string and set the key to char and it's count
        for (let char of str2)
            freqCount2[char] = ++freqCount2[char] || 1;

        // loop through the first string
        for (let key in freqCount1) {
            // if the key not exists in the second frequency count object                           // return false
            if (!freqCount2.hasOwnProperty(key)) return false;
            // if the count for this key not identical to the count for second frequency count key  // return false
            if (freqCount1[key] !== freqCount1[key]) return false;
        }

        // if it's alright return true
        return true;
    }

    anagram('awesome', 'someawe');
*/

/** Refactoring */

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

    let lookup = {};

    for (let char of first)
        lookup[char] = ++lookup[char] || 1;

    for (let char of second) {
        if (!lookup[char])
            return false;
        else
            --lookup[char];
    }
    return true;
}

validAnagram('anagram', 'anagram');