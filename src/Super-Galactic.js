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
    const currentDate = new Date();
    const milliseconds =  currentDate - pastBirthday;
    const earthYears = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365.25));

    return {earthYears,
      mercuryYears: Math.round(earthYears / .24),
    };
  }          
}