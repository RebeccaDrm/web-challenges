console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberA = parseFloat(document.getElementById("number-a").value);
  const numberB = parseFloat(document.getElementById("number-b").value);
  const operator = event.target.elements.operator.value;
  console.log(event);
  let result;

  // --v-- write your code here --v--

  switch (operator) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      if (numberB === 0) {
        result = "Error: Cannot divide by zero";
      } else {
        result = divide(numberA, numberB);
      }
      break;
    default:
      result = "Invalid operator";
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
