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

  test('should return the correct years passed on Earth since a past birthday based on users bday', () => {
    const userBirthday = new Date('1991-09-28');
    const age = 31;

    const spaceAge = new SpaceAge(age, userBirthday);
    const pastBirthday = new Date('2000-09-28');
    const yearsPassed = spaceAge.yearsPassed(pastBirthday);
    expect(yearsPassed.earthYears).toBeGreaterThanOrEqual(10);
  });

  //   test('should return the correct years passed on Mercury since a past birthday based on users bday', () => {
  //     const userBirthday = new Date('1991-09-28');
  //     const currentDate = new Date();
  //     const milliseconds = currentDate - userBirthday;
  //     const age = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365.25));

  //     const spaceAge = new SpaceAge(age);
  //     const pastBirthday = new Date('2000-09-28');
  //     const yearsPassed = spaceAge.yearsPassed(pastBirthday);
  //     expect(yearsPassed.mercuryYears).toBeGreaterThanOrEqual(33);
  //   });

  //   test('should return the correct years passed on Venus since a past birthday based on users bday', () => {
  //     const userBirthday = new Date('1991-09-28');
  //     const currentDate = new Date();
  //     const milliseconds = currentDate - userBirthday;
  //     const age = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365.25));

  //     const spaceAge = new SpaceAge(age);
  //     const pastBirthday = new Date('2000-09-28');
  //     const yearsPassed = spaceAge.yearsPassed(pastBirthday);
  //     expect(yearsPassed.venusYears).toBeGreaterThanOrEqual(13);
  //   });

  //   test('should return the correct years passed on Mars since a past birthday based on users bday', () => {
  //     const userBirthday = new Date('1991-09-28');
  //     const currentDate = new Date();
  //     const milliseconds = currentDate - userBirthday;
  //     const age = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365.25));

  //     const spaceAge = new SpaceAge(age);
  //     const pastBirthday = new Date('2000-09-28');
  //     const yearsPassed = spaceAge.yearsPassed(pastBirthday);
  //     expect(yearsPassed.marsYears).toBeGreaterThanOrEqual(4);
  //   });

  //   test('should return the correct years passed on Jupiter since a past birthday based on users bday', () => {
  //     const userBirthday = new Date('1991-09-28');
  //     const currentDate = new Date();
  //     const milliseconds = currentDate - userBirthday;
  //     const age = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365.25));

  //     const spaceAge = new SpaceAge(age);
  //     const pastBirthday = new Date('2000-09-28');
  //     const yearsPassed = spaceAge.yearsPassed(pastBirthday);
  //     expect(yearsPassed.jupiterYears).toBeGreaterThanOrEqual(1);
  //   });

  //   test('should return the correct years left until the users future birthday on Earth', () => {
  //     const userBirthday = new Date('1991-09-28');
  //     const currentDate = new Date();
  //     const milliseconds = currentDate - userBirthday;
  //     const age = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365.25));

  //     const spaceAge = new SpaceAge(age);
  //     const futureBirthday = new Date('2041-09-28');
  //     const yearsLeft = spaceAge.yearsLeft(futureBirthday);
  //     expect(yearsLeft.earthYears).toBeGreaterThanOrEqual(18);
  //   });

  //   test('should return the correct years left until the users future birthday on Mercury', () => {
  //     const userBirthday = new Date('1991-09-28');
  //     const currentDate = new Date();
  //     const milliseconds = currentDate - userBirthday;
  //     const age = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365.25));

  //     const spaceAge = new SpaceAge(age);
  //     const futureBirthday = new Date('2041-09-28');
  //     const yearsLeft = spaceAge.yearsLeft(futureBirthday);
  //     expect(yearsLeft.mercuryYears).toBeGreaterThanOrEqual(75);
  //   });
});