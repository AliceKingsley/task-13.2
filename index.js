let a = 0;
let b = 0;

function askFirstNumber() {
    return +prompt('Введите первое число: ');
}

function askSecondNumber() {
    return +prompt('Введите второе число: ');
}

function calcSum() {
    a = askFirstNumber();
    b = askSecondNumber();
    alert(`${a} + ${b} = ${a + b}`);
}

function calcDiff() {
    a = askFirstNumber();
    b = askSecondNumber();
    alert(`${a} - ${b} = ${a - b}`);
}

function calcMultipl() {
    a = askFirstNumber();
    b = askSecondNumber();
    alert(`${a} * ${b} = ${a * b}`);
}

function calcDivision() {
    a = askFirstNumber();
    b = askSecondNumber();
    alert(`${a} / ${b} = ${a / b}`);
}