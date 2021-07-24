// -- State Vars --
let result = 0,
    num1 = 0,
    num2 = 0;

// -- Cache DOM elements --

let buttons = document.querySelector('.buttons'),
	ng = document.getElementById('ng'),
    input = document.querySelector('input'),
    displ = document.querySelector('.display');

    
    
// -- Add event listeners --

buttons.addEventListener('click', handleClick);
ng.addEventListener('click', handleClick);

// -- Initialization --
init();
render(result)

function controller(addSub, reload) {

	if (addSub) {
		result = summate(addSub);

		render(result)
	}

	if (reload) {
		location.reload();
	}
	
}

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

  if (whoClicked === 'ng') {

	controller(0, 'reset');
  	
  } else {

  	controller(whoClicked);
  	
  }

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
