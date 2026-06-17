let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay(0);
}

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

function updateDisplay(value) {
    document.getElementById('calculator-result').innerText = value;
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || 0);
}

function usePreviousAnswer() {
    if (currentInput === '' && previousInput !== '') {
        currentInput = previousInput;
        updateDisplay(currentInput);
    }
}