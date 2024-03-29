class Calculator {
    static calcSum(elem) {
        sign = elem;
        clearInput();
    }

    static calcDiff() {
        sign = '-';
        clearInput();
    }

    static calcMultipl() {
        sign = '*';
        clearInput();
    }

    static calcDivision() {
        sign = '/';
        clearInput();
    }
}

let a = 0;
let b = 0;
let sign;

const div = document.querySelector('.result');
const input = document.querySelector('.number');
const buttonSum = document.querySelector('.sum');
const buttonDiff = document.querySelector('.diff');
const buttonMultiple = document.querySelector('.multiple');
const buttonDivision = document.querySelector('.division');
const buttonResult = document.querySelector('.equals');
const buttonClear = document.querySelector('.clear');

input.addEventListener("change", askFirstNumber);
buttonSum.addEventListener("click", () => Calculator.calcSum(buttonSum.textContent));
buttonDiff.addEventListener("click", Calculator.calcDiff);
buttonMultiple.addEventListener("click", Calculator.calcMultipl);
buttonDivision.addEventListener("click", Calculator.calcDivision);
buttonResult.addEventListener("click", equals);
buttonClear.addEventListener("click", clear);

function askFirstNumber() {
    a = Number(input.value);
    input.removeEventListener("change", askFirstNumber);
    return a;
}

function askSecondNumber() {
    b = Number(input.value);
    input.removeEventListener("change", askSecondNumber);
    div.classList.remove('error');
    return b;
}

function clear() {
    input.value = '';
    a = 0;
    b = 0;
    sign = '';
    input.placeholder = 'Введите первое число';
    div.classList.remove('error');
    div.textContent = '';
    input.addEventListener("change", askFirstNumber);
}

function clearInput() {
    input.value = '';
    input.placeholder = 'Введите второе число';
    input.addEventListener("change", askSecondNumber);
}

function equals() {
    switch (sign) {
        case '+': div.textContent = `Результат сложения: ${a + b}`; break;
        case '-': div.textContent = `Результат вычитания: ${a - b}`; break;
        case '*': div.textContent = `Результат умножения: ${a * b}`; break;
        case '/': if (b != 0) {
                            div.textContent = `Результат деления: ${a / b}`;
                        } else {
                            div.textContent = `На ноль делить нельзя!`;
                            div.classList.add('error');
                        }; break;
        default: div.textContent = `Ты не ввёл данные`; div.classList.add('error');
    }
}