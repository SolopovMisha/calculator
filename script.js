function getValues() {
    const form = document.getElementById('Countes');
    const valueOne = Number(form.firstCount.value);
    const valueTwo = Number(form.secondCount.value);
    return [valueOne, valueTwo];
}

function onClickButtonPlus() {
    const [valueOne, valueTwo] = getValues();
    let result = valueOne + valueTwo;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Результат: ${result}`;
}

function onClickButtonMinus() {
    const [valueOne, valueTwo] = getValues();
    let result = valueOne - valueTwo;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Результат: ${result}`;
}

function onClickButtonMultiplication() {
    const [valueOne, valueTwo] = getValues();
    let result = valueOne * valueTwo;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Результат: ${result}`;
}

function onClickButtonDivision() {
    const [valueOne, valueTwo] = getValues();
    
    if (valueTwo === 0) {
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = "Ошибка: деление на ноль!";
        return;
    }
    
    let result = valueOne / valueTwo;
    

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Результат: ${result}`;
}