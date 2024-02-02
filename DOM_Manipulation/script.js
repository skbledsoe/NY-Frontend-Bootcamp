//  ACCESSING ELEMENTS
// by ID
// const heading = document.getElementById('heading');
// returns the html element with a matching ID

// by class
// const heading = document.getElementsByClassName('heading1');
// returns an array of html elements that have matching classes

// tag name
const heading = document.getElementsByTagName('h1');
// returns array of matching html elements with matching tags (<h1>)

console.log(heading);

// select all descendants of an element with a certain tag
const listItems = document.querySelectorAll('#list li');
console.log(listItems);


// MODIFYING ELEMENTS
// contents using innerHTML
heading[0].innerHTML = '<em>Learning</em> DOM Manipulation';
// can add html code

// contents using textContent
// heading[0].textContent = '<em>All About</em> DOM Manipulation';
// can only add text, no html code

// element attributes using setAttribute
heading[1].setAttribute('class', 'highlight');

// styles using style property
const button = document.getElementById('btn');
button.style.backgroundColor = 'black';
button.style.color = 'white';

// creating new elements dynamically
const container = document.getElementsByClassName('container');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Hello Everyone. This is a new paragraph.';

container[0].appendChild(newParagraph);

// remove elements dynamically
// container[0].remove();
// button.remove();
// listItems[2].remove();


// HANDLING EVENTS
button.addEventListener('click', addListItem);

function addListItem() {
  const newListItem = document.createElement('li');
  newListItem.textContent = 'New list item';

  document.getElementById('list').appendChild(newListItem);
}

// Click Event: Triggered when an element is clicked.
// Mouseover Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down.
// Submit Event: Triggered when a form is submitted.
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.