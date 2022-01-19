

console.log(operator("*", 3, 5));


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

    case '*':
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