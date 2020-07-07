const fizzBuzz = require('../src/fizzBuzz');

describe('Fizzbuzz', () => {
  it('is divisable by 3', () => {
    number = 15 
    expect(fizzBuzz(number)).toEqual('Fizz')
  });

  it('is divisable by 5', () => {
    expect(fizzBuzz(20)).toEqual('Buzz')
  });
});