/**
    function areThereDuplicates(...arr) {
        // if empty return false

        // define freq object

        // loop through arr
            // freq[char] = ++freq[char] || 1

        // loop through freq keys
            // if value > 0 return true

        // return false
    }

    areThereDuplicates(1, 2, 3);
    areThereDuplicates(1, 2, 2);
    areThereDuplicates('a', 'b', 'c', 'a');

*/

function areThereDuplicates(...arr) {

    if (!arr.length) return false;

    let freq = {};

    for (let char of arr) {
         freq[char] = ++freq[char] || 1;
        if (freq[char] > 1) return true;
    }
    
    return false;
}

areThereDuplicates(1, 2, 3);
// areThereDuplicates(1, 2, 2);
// areThereDuplicates('a', 'b', 'c', 'a');
