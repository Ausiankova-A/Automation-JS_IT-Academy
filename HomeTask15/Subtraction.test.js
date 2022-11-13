const Calculator = require('./calculator');

const calculator = new Calculator();

describe('Checking subtraction function in Calculator', function () {
  test('when I pass paramenters 9, 8, 7, 6, 5, 4, 3, 2, 1 function subtraction should return number -27 ', async () => {
    expect(calculator.subtraction(9, 8, 7, 6, 5, 4, 3, 2, 1)).toBe(-27);
  });
  test.each([
    [4, 3, 1],
    [14, 14, 0],
    [7891511122145, 1, 7891511122144],
    [15, -12, 27],
    [-12, 15, -27],
    [-22, -8, -14],
    ['two', 7, Error],
    [10, undefined, Error],
    ['3', '5', Error],
    [12, 0, 12],
    [5, null, Error],
  ])('when I pass parameters %s, %s function subtraction should return %s  ', async (firstParam, secondParam, result) => {
    expect(calculator.subtraction(firstParam, secondParam)).toBe(result);
  });
});
