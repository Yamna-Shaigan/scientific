let display = document.getElementById('display');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');
let num = '';
let result = 0;

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;
    
    if (value === 'C') {
      clearCalculator();
    } else if (value === '=') {
      calculateResult();
    } else if (value === '&lsaquo;') {
      backspace();
    } else {
      num += value;
      display.value = num;
    }
  });
});

// Clear calculator
function clearCalculator() {
  num = '';
  display.value = '';
  result = 0;
}

// Backspace
function backspace() {
  num = num.slice(0, -1);
  display.value = num;
}

// Calculate result
function calculateResult() {
  try {
    result = eval(num);
    display.value = result;
    num = result.toString();
  } catch (error) {
    display.value = 'Error';
    num = '';
  }
}


