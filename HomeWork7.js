function getRandomDiceNumber() {
    const min = 1;
    const max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const FirstPlayer = ((getRandomDiceNumber()) + (getRandomDiceNumber()) + (getRandomDiceNumber()));
const SecondPlayer = ((getRandomDiceNumber()) + (getRandomDiceNumber()) + (getRandomDiceNumber()));
if (FirstPlayer > SecondPlayer) {
    console.log('FirstPlayer wins');
} else if (FirstPlayer < SecondPlayer) {
    console.log('SecondPlayer wins');
} else {
    console.log('Draw');
}


let date = new Date(Date.UTC(2000, 0, 1)).getTime();
const currentDate = new Date().setUTCHours(0, 0, 0, 0);
const dayMS = 24 * 60 * 60 * 1000;
let num = 0;

while (date <= currentDate) {
    const currentDay = new Date(date);
    if (currentDay.getDate() === 13 && currentDay.getDay() === 5) {
        num++;
    }
    date += dayMS;
}
console.log(num);


const theNumber = 120;
const amountOfNumbers = 8
let results = [];
let theNumber2 = theNumber;
for (let i = 1; i <= amountOfNumbers; i++) {
    let getRandomNumber = Math.floor(Math.random() * (theNumber2 + 1));
    if (i === amountOfNumbers) {
        results.push(theNumber2);
    } else {
        results.push(getRandomNumber);
        theNumber2 -= getRandomNumber;
    }
};
console.log(results);
console.log(results.reduce((a, b) => a + b));


const theNumberDecimal = 1635;
const amountOfNumbersDecimal = 7
let resultsDecimal = [];
let theNumber2Decimal = theNumberDecimal;
for (let i = 1; i <= amountOfNumbersDecimal; i++) {
    let getRandomNumberDecimal = Math.round(Math.random() * (theNumber2Decimal * 100)) / 100;
    if (i === amountOfNumbersDecimal) {
        resultsDecimal.push(Math.round(theNumber2Decimal * 100) / 100);
    } else {
        resultsDecimal.push(getRandomNumberDecimal);
        theNumber2Decimal -= getRandomNumberDecimal;
    }
};
console.log(resultsDecimal);
console.log(resultsDecimal.reduce((a, b) => a + b));