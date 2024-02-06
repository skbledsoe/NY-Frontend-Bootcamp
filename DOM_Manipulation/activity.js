const button = document.getElementById('btn');
const numberInput = document.getElementById('number');
const container = document.getElementsByClassName('container');

button.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const numberHeading = document.createElement('h1');

  if (parseInt(numberInput.value) % 2 === 0) {
    numberHeading.textContent = 'Even';
  } else { 
    numberHeading.textContent = 'Odd';    
  }

  container[0].appendChild(numberHeading);
}


// const myDiv = document.getElementById('myDiv');
// const myForm = document.getElementById('myForm');
// const numInput = document.getElementById('number')
// const btn = document.getElementById('myBtn');

// btn.addEventListener('click', checkNumber);

// function checkNumber() {
//     const numberValue = numInput.value;

//     if (numberValue % 2 == 0) {
//         myDiv.textContent = "Even";
//     } else {
//         myDiv.textContent = "Odd";
//     }
// }