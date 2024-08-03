let memoryValue = 0;

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  let currentValue = document.getElementById('display').value;
  document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
  let displayValue = document.getElementById('display').value;
  try {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function sqrt() {
  let displayValue = document.getElementById('display').value;
  try {
    let result = Math.sqrt(eval(displayValue));
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function memoryAdd() {
  let displayValue = document.getElementById('display').value;
  try {
    memoryValue += eval(displayValue);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
  clearDisplay();
}

function memorySubtract() {
  let displayValue = document.getElementById('display').value;
  try {
    memoryValue -= eval(displayValue);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
  clearDisplay();
}

function memoryRecall() {
  document.getElementById('display').value = memoryValue;
}

function memoryClear() {
  memoryValue = 0;
}
