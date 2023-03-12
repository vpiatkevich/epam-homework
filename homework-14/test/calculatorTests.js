const { expect } = require('chai');
const { Calculator } = require('../calculator');

describe('Calculator tests', () => {
  it('should add one value to another and return the result', async () => {
    const calculator = new Calculator();
    const addResult = calculator.add(5, 3);
    expect(addResult).to.equal(8);
  });

  it('should add multiple values and return the result', async () => {
    const calculator = new Calculator();
    const addResult = calculator.add(5, 3, 1, 2, 4);
    expect(addResult).to.equal(15);
  });

  it('should multiply two values and return the result', async () => {
    const calculator = new Calculator();
    const multiplyResult = calculator.multiply(9, 3);
    expect(multiplyResult).to.equal(27);
  });

  it('should multiply multiple values and return the result', async () => {
    const calculator = new Calculator();
    const multiplyResult = calculator.multiply(2, 3, 4);
    expect(multiplyResult).to.equal(24);
  });

  it('should subtract one value from another and return the result', async () => {
    const calculator = new Calculator();
    const subtractionResult = calculator.subtraction(6, 4);
    expect(subtractionResult).to.equal(2);
  });

  it('should divide one value by another and return the result', async () => {
    const calculator = new Calculator();
    const divisionResult = calculator.divide(6, 3);
    expect(divisionResult).to.equal(2);
  });

  it('should raise a number to the power of two and return the result', async () => {
    const calculator = new Calculator();
    const exponentiationResult = calculator.exponentiation(5);
    expect(exponentiationResult).to.equal(25);
  });
});
