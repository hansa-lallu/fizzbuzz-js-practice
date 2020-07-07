const fizzBuzz = require('../src/fizzBuzz');

describe('Fizzbuzz', () => {
  it('is divisable by 3', () => {
    expect(fizzBuzz(9)).toEqual('Fizz')
  });

  it('is divisable by 5', () => {
    expect(fizzBuzz(20)).toEqual('Buzz')
  });

  it('is divisable by 5 and 2', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
  });
});