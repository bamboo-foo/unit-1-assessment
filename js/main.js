// -- State Vars --
let result = 0,
    num1 = 0,
    num2 = 0;

// -- Cache DOM elements --

let buttons = document.querySelector('.buttons'),
    input = document.querySelector('input'),
    displ = document.querySelector('.display');

    
    
// -- Add event listeners --

buttons.addEventListener('click', handleClick);

// -- Controller --
init();
render(result)

function init() {
  
  result = 0,
  num1 = parseInt(input.value),
  num2 = parseInt(displ.innerText);

}

function render(result) {
  
  if (result < 0) {
    displ.setAttribute('style', 'color: red');
  } else {
    displ.setAttribute('style', 'color: black');
  }

  displ.innerText = result;
}

function handleClick(mouseEvent) {

  let whoClicked = mouseEvent.target.getAttribute('id');

  result = summate(whoClicked);

  render(result)

}

function summate(operation) {
  

  num1 = parseInt(input.value),
  num2 = parseInt(displ.innerText);

  switch(operation) {

    case 'add':
      result = num1 + num2;
      break;

    case 'subtract':
      result = num2 - num1;
  }
  
  return result;

}