import obtainRandomNumber from '../utils/utils';

describe('obtainRandomNumber', () => {
  it('should return a number within the specified range', () => {
    const min = 1;
    const max = 10;
    const randomNumber = obtainRandomNumber(min, max);

    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it('should return an integer number', () => {
    const min = 5;
    const max = 50;
    const randomNumber = obtainRandomNumber(min, max);

    expect(Number.isInteger(randomNumber)).toBe(true);
  });

  it('should return the same number when min and max are equal', () => {
    const min = 5;
    const max = 5;
    const randomNumber = obtainRandomNumber(min, max);

    expect(randomNumber).toEqual(min);
  });
});
