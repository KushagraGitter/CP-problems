/**
* @param {Array<*|Array>} value
* @return {Array}
*/
export default function flatten(value) {
    return  value.reduce((pev, curr) => pev.concat(Array.isArray(curr) ? flatten(curr) : curr), [])
}


/**
* @param {Array<*|Array>} value
* @return {Array}
*/
export default function flatten(array) {
    return array.reduce(
            (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
            [],
            );
}

export default function flatten(array) {
    while (array.some(Array.isArray)) {
        array = [].concat(...array);
    }
    return array;
}


export default function flatten(array) {
    const res = [];
    const copy = array.slice();

    while (copy.length) {
        const item = copy.shift();
        if (Array.isArray(item)) {
            copy.unshift(...item);
        } else {
            res.push(item);
        }
    }

    return res;
}
