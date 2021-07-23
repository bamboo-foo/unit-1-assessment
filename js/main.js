  // -- Cache DOM elements --

let addEl = document.getElementById('add'),
    subEl = document.getElementById('subtract'),
    input = document.querySelector('input'),
    displ = document.querySelector('.display');

init();

function init() {
    
  addEl.addEventListener('click', handleClick);
  subEl.addEventListener('click', handleClick);

}

function handleClick(mouseEvent) {

  let whoClicked = mouseEvent.target.getAttribute('id');

  displ.innerText = summate(whoClicked);

}

function summate(operation) {
  
  let newResult = 0,
      num1 = parseInt(input.value),
      num2 = parseInt(displ.innerText);

  switch(operation) {

    case 'add':
      result = num1 + num2;
      break;

    case 'subtract':
      result = num2 - num1;
  }

  if (result < 0) {
    displ.setAttribute('style', 'color: red');
  } else {
    displ.setAttribute('style', 'color: black');
  }
  return result;

}