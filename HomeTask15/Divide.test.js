const Calculator = require('./calculator');

const calculator = new Calculator();

describe('Checking divide function in Calculator', function () {
  test('when I pass paramenters 9, 8, 7, 6, 5, 4, 3, 2, 1 function divide should return number 0.00022321 ', async () => {
    expect(calculator.divide(9, 8, 7, 6, 5, 4, 3, 2, 1)).toEqual(0.00022321);
  });
  test.each([
    [4, 2, 2],
    [7, 2, 3.5],
    [14, 14, 1],
    [7891511122145, 1, 7891511122145],
    [24, -12, -2],
    [-12, 3, -4],
    [-30, -5, 6],
    ['two', 7, Error],
    [10, undefined, Error],
    ['3', '5', Error],
    [12, 0, Error],
    [5, null, Error],
  ])('when I pass parameters %s, %s function divide should return %s  ', async (firstParam, secondParam, result) => {
    expect(calculator.divide(firstParam, secondParam)).toEqual(result);
  });
});
