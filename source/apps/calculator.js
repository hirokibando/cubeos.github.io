let currentInput = ''; // Stores the current input
let previousInput = ''; // Stores the previous input for operations
let operator = ''; // Stores the selected operator

// Function to append a number to the current input
function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Function to append an operator
function appendOperator(op) {
    if (currentInput === '') return; // Prevent adding operator without a number
    if (previousInput !== '') calculateResult(); // Perform calculation if there's already an operator
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to append a decimal point
function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

// Function to clear the display and reset inputs
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay(0);
}

// Function to calculate the result
function calculateResult() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    updateDisplay(result);
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

// Function to update the display
function updateDisplay(value) {
    document.getElementById('calculator-result').innerText = value;
}

// Function to handle backspace (deleting the last character)
function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || 0);
}

// Function to use the previous answer (^) button
function usePreviousAnswer() {
    if (currentInput === '' && previousInput !== '') {
        currentInput = previousInput;
        updateDisplay(currentInput);
    }
}