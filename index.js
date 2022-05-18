// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result); // [ 'exuberant', 'destruction', 'present' ]

// Another example

function isBigEnough(value) {
    return value >= 10
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)

console.log(filtered); // [ 12, 130, 44 ]


// The forEach() method executes a provided function once for each array element.

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element)); // a // b // c