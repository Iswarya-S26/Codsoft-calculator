const inputElement = document.getElementById("input");

function appendToDisplay(input) {
  inputElement.value += input;
}

function calculate() {
  try {
    let answer = eval(inputElement.value);
    inputElement.value = answer;
  } catch (error) {
    inputElement.value = "Error";
  }
}

function clearAll() {
  inputElement.value = "";
}
