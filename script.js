var displayDiv = document.querySelector("#display");
var currentInput = '0';
var currentOperator = '';
var resultDisplayed = false;

function press(value) {
    if (resultDisplayed) {
        currentInput = '0';
        resultDisplayed = false;
    }
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else if (value === '.' && currentInput.includes('.')) {
        return;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function setOperator(operator) {
    if (currentOperator !== '') {
        calculate();
    }
    currentOperator = operator;
    currentInput += ' ' + operator + ' ';
    updateDisplay();
}

function clr() {
    currentInput = '0';
    currentOperator = '';
    updateDisplay();
}

function calculate() {
    var inputArray = currentInput.split(' ');
    var num1 = parseFloat(inputArray[0]);
    var num2 = parseFloat(inputArray[2]);
    var operator = inputArray[1];
    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("No se puede dividir por cero.");
                clr();
                return;
            }
            break;
    }

    displayDiv.innerText = result;
    currentInput = result.toString();
    resultDisplayed = true;
}

function updateDisplay() {
    displayDiv.innerText = currentInput;
}
