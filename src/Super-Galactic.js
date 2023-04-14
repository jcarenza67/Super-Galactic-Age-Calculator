export class SpaceAge{
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    return Math.round(this.age / .24);
  }

  venusAge() {
    return Math.round(this.age / .62);
  }
}