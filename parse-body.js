function firstStep(input) {
  // Your code here
  const value = input.split('&');

  return value;
}

function secondStep(input) {
  // Your code here
  const arr = [];

  for(let i = 0; i < input.length; i++) {
    arr.push(input[i].split('='));
  }

  return arr;
}

function thirdStep(input) {
  // Your code here
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input.length; j++) {
      input[i][j] = input[i][j].replace(/\+/g, " ");
    }
  }

  return input;
}

function fourthStep(input) {
  // Your code here
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input.length; j++) {
      input[i][j] = decodeURIComponent(input[i][j]);
    }
  }

  return input;
}

function fifthStep(input) {
  // Your code here
  const obj = {};

  for(let i = 0; i < input.length; i++) {
    obj[input[i][0]] = input[i][1];
  }

  return obj;
}

function parseBody(str) {
  // Your code here
  str = firstStep(str);
  str = secondStep(str);
  str = thirdStep(str);
  str = fourthStep(str);
  str = fifthStep(str);
  return str;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
