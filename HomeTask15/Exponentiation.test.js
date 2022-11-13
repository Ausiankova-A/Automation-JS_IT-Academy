const Calculator = require('./calculator');

const calculator = new Calculator();

describe('Checking exponentiation function in Calculator', function () {
  test.each([
    [3, 4, 81],
    [1, 7891511122145, 1],
    [7891511122145, 1, 7891511122145],
    [5, -2, 0.04],
    [-2, -4, 0.0625],
    [-2, -3, -0.125],
    [-5, 3, -125],
    [-5, 4, 625],
    ['two', 7, Error],
    [10, undefined, Error],
    ['3', '5', Error],
    [12, 0, 1],
    [5, null, Error],
  ])('when I pass parameters %s, %s function exponentiation should return %s  ', async (firstParam, secondParam, result) => {
    expect(calculator.exponentiation(firstParam, secondParam)).toEqual(result);
  });
});
