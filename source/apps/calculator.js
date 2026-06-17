let currentInput = '';
let previousInput = '';
let operator = '';

const appendNumber = (number) => {
    currentInput += number;
    updateDisplay(currentInput);
};

const appendOperator = (op) => {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
};

const appendDecimal = () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    };
};

const clearDisplay = () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay(0);
};

const calculateResult = () => {
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
};

const updateDisplay = (value) => {
    document.getElementById('calculator-result').innerText = value;
}

const backspace = () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || 0);
}

const usePreviousAnswer = () => {
    if (currentInput === '' && previousInput !== '') {
        currentInput = previousInput;
        updateDisplay(currentInput);
    }
}