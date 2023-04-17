import { SpaceAge } from '../src/Super-Galactic.js';

describe('SpaceAge', () => {
  let spaceAge;

  beforeEach(() => {
    spaceAge = new SpaceAge(30);
  });

  test('constructor sets age properly', () => {
    const age = 42;
    const spaceAge = new SpaceAge(age);
    expect(spaceAge.age).toBe(age);
  });

  test('should correctly calculate age on Earth', () => {
    expect(spaceAge.earthAge()).toBe(30);
  });

  test('should correctly calculate age on Mercury', () => {
    expect(spaceAge.mercuryAge()).toBe(125.00);
  });

  test('should correctly calculate age on Venus', () => {
    expect(spaceAge.venusAge()).toBe(48.39);
  });

  test('should correctly calculate age on Mars', () => {
    expect(spaceAge.marsAge()).toBe(15.96);
  });

  test('should correctly calculate age on Jupiter', () => {
    expect(spaceAge.jupiterAge()).toBeCloseTo(2.53);
  });

  test('should return the correct years passed on Earth since a past birthday', () => {
    const result = spaceAge.yearsPassed(20);
    expect(result.earthYears).toEqual(10);
  });
  test('should return the correct years passed on Mercury since a past birthday', () => {
    const result = spaceAge.yearsPassed(20);
    expect(result.mercuryYears).toEqual(41.67);
  });
  test('should return the correct years passed on Venus since a past birthday', () => {
    const result = spaceAge.yearsPassed(20);
    expect(result.venusYears).toEqual(16.13);
  });
  test('should return the correct years passed on Mars since a past birthday', () => {
    const result = spaceAge.yearsPassed(20);
    expect(result.marsYears).toEqual(5.32);
  });
  test('should return the correct years passed on Jupiter since a past birthday', () => {
    const result = spaceAge.yearsPassed(20);
    expect(result.jupiterYears).toEqual(0.84);
  });
  test('should return the correct years left until next birthday on Earth', () => {
    const result = spaceAge.yearsLeft(100);
    expect(result.earthYears).toEqual(70);
  });
  test('should return the correct years left until next birthday on Mercury', () => {
    const result = spaceAge.yearsLeft(100);
    expect(result.mercuryYears).toEqual(291.67);
  });
  test('should return the correct years left until next birthday on Venus', () => {
    const result = spaceAge.yearsLeft(100);
    expect(result.venusYears).toBeCloseTo(112.90, 2);
  });

  test('should return the correct years left until next birthday on Mars', () => {
    const result = spaceAge.yearsLeft(100);
    expect(result.marsYears).toEqual(37.23);
  });

  test('should return the correct years left until next birthday on Jupiter', () => {
    const result = spaceAge.yearsLeft(100);
    expect(result.jupiterYears).toEqual(5.90);
  
  });
});