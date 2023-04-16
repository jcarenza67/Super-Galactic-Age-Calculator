export class SpaceAge{
  constructor(age, userBirthday) {
    this.age = age;
    this.userBirthday = userBirthday;
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
    const userBirthday = this.userBirthday;
    const milliseconds = pastBirthday - userBirthday;
    const earthYears = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365.25));

    return { earthYears,
      mercuryYears: Math.round(earthYears / .24),
      venusYears: Math.round(earthYears / .62),
      marsYears: Math.round(earthYears / 1.88),
      jupiterYears: Math.round(earthYears / 11.86)
    };
  }
}