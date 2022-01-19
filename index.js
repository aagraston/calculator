
display = document.querySelector('.calc-display');
numbers = document.querySelectorAll('.number');
operators = document.querySelectorAll('.operator');

displayString = "";
currentNum = "";
operand = "";



//event listeners
numbers.forEach(element => {
  element.addEventListener('click', clickNum);
});

operators.forEach(element => {
  element.addEventListener('click', clickOp);
});


//operator functions:

function operator(op, a, b) {

  returnNum = 0;

  switch (op) {

    case '+':
      returnNum = addNum(a, b);
      break;

    case '-':
      returnNum = subNum(a, b);
      break;

    case '/':
      returnNum = divNum(a, b);
      break;

    case 'x':
      returnNum = mulNum(a, b);
      break;
  }

  return returnNum;

}

function addNum(a, b) {
  return a + b;
}

function subNum(a, b) {
  return a - b;
}

function divNum(a, b) {
  return a / b;
}

function mulNum(a, b) {
  return a * b;
}

//input and display functions

function clickNum() {
  number = parseInt(this.id);
  displayString = displayString.toString() + number.toString();
  updateDisplay();
}

function clickOp() {
  switch (this.id) {

    case 'clear':
      displayString = "";
      break;

    case 'plus':
      displayString += " + ";
      break;

    case 'minus':
      displayString += " - ";
      break;

    case 'divide':
      displayString += " / ";
      break;

    case 'multiply':
      displayString += " x ";
      break;
    
    case 'equals':
      break;
  }
  checkDisplayString();
}

//check for need of operation
function checkDisplayString() {
splitText = displayString.split(' ');
if (splitText[2] != '' && splitText[2] != undefined) {
  displayString = operator(splitText[1], parseInt(splitText[0]), parseInt(splitText[2]));
}
updateDisplay();
}

function updateDisplay() {
  display.innerText = displayString.toString();
}
