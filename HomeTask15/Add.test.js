const Calculator = require('./calculator');

const calculator = new Calculator();

describe('Checking add function in Calculator', function () {
  test('when I pass paramenters 1, 2, 3, 4, 5, 6, 7, 8, 9 function add should return number 45 ', async () => {
    expect(calculator.add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });
  test.each([
    [3, 4, 7],
    [1, -1, 0],
    [654324512, 78915111221, 79569435733],
    [15, -12, 3],
    [-22, -8, -30],
    ['two', 7, Error],
    [10, undefined, Error],
    ['3', '5', Error],
    [12, 0, 12],
    [5, null, Error],
  ])('when I pass parameters %s, %s function add should return %s  ', async (firstParam, secondParam, sum) => {
    expect(calculator.add(firstParam, secondParam)).toBe(sum);
  });
});
