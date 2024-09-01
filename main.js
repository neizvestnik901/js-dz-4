//Задача 1

function user(name, birthYear, currentYear) {
    const age = currentYear - birthYear;
    return `${name}, Ваш возраст ${age}`;
}

let name = prompt("Введите свое имя:");
let birthYear = prompt ("Введите год вашего рождения:");
let currentYear = prompt ("Введите нынешний год:");

let result = user (name, birthYear, currentYear);
console.log(result);

// Задача 2

function content(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSign() {
    const signs = ['+', '-', '*', '/'];
    return signs[Math.floor(Math.random() * signs.length)];
}

let number = +prompt('Введите количество примеров');

for (let i = 0; i < number; i++) {
    let one = content(1, 10);
    let two = content(1, 10);
    let sign = getRandomSign();
    let correct;

    switch (sign) {
        case '+':
            correct = one + two;
            break;
        case '-':
            correct = one - two;
            break;
        case '*':
            correct = one * two;
            break;
        case '/':
            correct = one / two;
            break;
    }

    let answer = +prompt(one + ' ' + sign + ' ' + two + ' = ');

    if (answer === correct) {
        console.log(`Ваш ответ верный - ${answer}`);
    } else {
        console.log(`Ваш ответ неверный - ${answer}. Правильный ответ - ${correct}!`);
    }
}

