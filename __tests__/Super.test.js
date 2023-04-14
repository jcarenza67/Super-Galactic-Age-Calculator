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
    expect(spaceAge.mercuryAge()).toBe(125);
  });

  test('should correctly calculate age on Venus', () => {
    expect(spaceAge.venusAge()).toBe(48);
  });

  test('should correctly calculate age on Mars', () => {
    expect(spaceAge.marsAge()).toBe(16);
  });

  test('should correctly calculate age on Jupiter', () => {
    expect(spaceAge.jupiterAge()).toBeCloseTo(3);
  });

  test('should return the correct years passed on earth since a past birthday', () => {
    const result = spaceAge.yearsPassed(20);
    expect(result.earthYears).toEqual(10);
  });

  test('should return the correct years passed on Mercury since a past birthday', () => {
    const result = spaceAge.yearsPassed(20);
    expect(result.mercuryYears).toEqual(42);
  });

  test('should return the correct years passed on Venus since a past birthday', () => {
    const result = spaceAge.yearsPassed(20);
    expect(result.venusYears).toEqual(16);
  });
});