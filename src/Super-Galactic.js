export class SpaceAge{
  constructor(age) {
    this.age = age;
  }

  earthAge() {
    return this.age;
  }

  mercuryAge() {
    return parseFloat((this.age / .24).toFixed(2));
  }

  venusAge() {
    return parseFloat((this.age / .62).toFixed(2));
  }

  marsAge() {
    return parseFloat((this.age / 1.88).toFixed(2));
  }

  jupiterAge() {
    return parseFloat((this.age / 11.86).toFixed(2));
  }

  yearsPassed(pastBirthday) {
    const earthYears = this.age - pastBirthday;
    return {earthYears,
      mercuryYears: parseFloat((earthYears / .24).toFixed(2)),
      venusYears: parseFloat((earthYears / .62).toFixed(2)),
      marsYears: parseFloat((earthYears / 1.88).toFixed(2)),
      jupiterYears: parseFloat((earthYears / 11.86).toFixed(2)),
    };
  }
  yearsLeft(futureBirthday) {
    const earthLeft = futureBirthday - this.age;
    return {earthYears: earthLeft,
      mercuryYears: parseFloat((earthLeft / .24).toFixed(2)),
      venusYears: parseFloat((earthLeft / .62)),
      marsYears: parseFloat((earthLeft / 1.88).toFixed(2)),
      jupiterYears: parseFloat((earthLeft / 11.86).toFixed(2)),
    };
  }

}