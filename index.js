let a = 0;
let b = 0;
const div = document.querySelector('.result');

function askFirstNumber() {
    return Number(document.querySelector('.first-number').value);
}

function askSecondNumber() {
    return Number(document.querySelector('.second-number').value);
}

function calcSum() {
    a = askFirstNumber();
    b = askSecondNumber();
    div.textContent = `Результат сложения: ${a + b}`;
}

function calcDiff() {
    a = askFirstNumber();
    b = askSecondNumber();
    div.textContent = `Результат вычитания: ${a - b}`;
}

function calcMultipl() {
    a = askFirstNumber();
    b = askSecondNumber();
    div.textContent = `Результат умножения: ${a * b}`;
}

function calcDivision() {
    a = askFirstNumber();
    b = askSecondNumber();
    div.textContent = `Результат деления: ${a / b}`;
}