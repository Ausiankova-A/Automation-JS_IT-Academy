const Calculator = require('./calculator');

const calculator = new Calculator();

describe('Checking multiply function in Calculator', function () {
  test('when I pass paramenters 1, 2, 3, 4, 5, 6, 7, 8, 9 function multiply should return number 362880 ', async () => {
    expect(calculator.multiply(1, 2, 3, 4, 5, 6, 7, 8, 9)).toEqual(362880);
  });
  test.each([
    [3, 4, 12],
    [1, 7891511122145, 7891511122145],
    [15, -12, -180],
    [-22, -8, 176],
    ['two', 7, Error],
    [10, undefined, Error],
    ['3', '5', Error],
    [12, 0, 0],
    [5, null, Error],
  ])('when I pass parameters %s, %s function multiply should return %s  ', async (firstParam, secondParam, result) => {
    expect(calculator.multiply(firstParam, secondParam)).toEqual(result);
  });
});
