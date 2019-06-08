function collectStrings(obj, arr = []) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            arr.push(obj[key]);
        else if (isObject(obj[key]))
            arr = arr.concat(collectStrings(obj[key]));
    }
    return arr;
}

function isObject(val) {
    return typeof val === 'object' && val !== null && val.constructor === Object;
}

obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"]