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
    return Math.floor(this.age / 11.86);
  }
}
