console.log('Hello world!');

//  Variables - store data values


//  var - global variable
if (true) {
  var name = 'John';
}

name = 'Gab';
console.log(name);


//  const - fixed value
const birthday = 'Feb 14';
// birthday = 'Feb 13'; throws an error, cannot reassign a constant


// let - block scoped variable

if (true) {
  let x = 23;
  console.log(x);
}

// console.log(x); - throws an error, x is only available in that block
