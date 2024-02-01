// Introduction to Arrays

// Creating an Array
let superheros = ['Spiderman', 'Sailor Moon', 'Scarlet Witch', 'Batman'];


// Accessing array elements
console.log('Hero 1:', superheros[0]);
console.log('Hero 2:', superheros[1]);
console.log('The last hero:', superheros[superheros.length - 1]);


// Modifying array elements
superheros[1] = 'Batgirl';
superheros.push('Spiderwoman');
superheros.push('Captain Planet');
superheros.pop();
console.log(superheros)


// Array Iteration
for (let idx = 0; idx < superheros.length; idx++) {
  console.log(superheros[idx]);
}

superheros.forEach((hero) => console.log('The hero is:', hero));


// Array Methods

// length
console.log('The array length is', superheros.length);

// indexOf
console.log('The index place of Batgirl is', superheros.indexOf('Batgirl'));

// includes
console.log('Does the array include Sailor Moon?', superheros.includes('Sailor Moon'));
console.log('Does the array include Spiderman?', superheros.includes('Spiderman'));

// join
console.log('Joined array:', superheros.join(', '));

// slice
let slicedArray = superheros.slice(1, 3);
console.log('Sliced array:', slicedArray)
console.log('Original array:', superheros);

// splice
let removedElements = superheros.splice(1, 2);
console.log('Spliced elements:', removedElements);
console.log('Modified original array:', superheros);
