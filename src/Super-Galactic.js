export class SpaceAge{
  constructor(age) {
    this.age = age;
  }

  earthAge() {
    return this.age;
  }

  mercuryAge() {
    return Math.round(this.age / .24);
  }

  venusAge() {
    return Math.round(this.age / .62);
  }

  marsAge() {
    return Math.round(this.age / 1.88);
  }

  jupiterAge() {
    return Math.round(this.age / 11.86);
  }

  yearsPassed(pastBirthday) {
    const earthYears = this.age - pastBirthday;
    return {earthYears,
      mercuryYears: Math.round(earthYears / .24),
      venusYears: Math.round(earthYears / .62),
      marsYears: Math.round(earthYears / 1.88),
      jupiterYears: Math.round(earthYears / 11.86)};
  }

  yearsLeft(futureBirthday) {
    const earthLeft = futureBirthday - this.age;
    return {earthYears: earthLeft,
      mercuryYears: Math.round(earthLeft / .24),};
  }
}